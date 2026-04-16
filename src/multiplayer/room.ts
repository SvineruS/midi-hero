import { joinRoom, Room } from "trystero/nostr";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import type { PlayerInfo, SongSelection, ReadyStatus, ScoreUpdate, EndStats } from "./types.ts";

const APP_ID = "midi-hero";

export function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}


export class MultiplayerRoom {
  room: Room;
  roomCode: string;
  localName: string;
  isHost: boolean;
  peers = new Map<string, PlayerInfo>();

  // Song lifecycle state
  currentSong: SongSelection | null = null;
  private readyPeers = new Set<string>();
  private localReady = false;

  // Send functions
  sendScore!: (data: ScoreUpdate) => void;
  sendEndStats!: (data: EndStats) => void;
  private sendPlayerInfo!: (data: PlayerInfo, targetPeers?: string[]) => void;
  private sendSongSelect!: (data: SongSelection) => void;
  private sendReady!: (data: ReadyStatus) => void;
  private sendStart!: (data: {}) => void;

  // Callbacks for consumers
  onPeersChanged: () => void = () => {};
  onGameReady: (songId: string, diffI: number) => void = () => {};
  onStatusChange: (status: "waiting" | "downloading" | "ready") => void = () => {};
  onPeerScore: (peerId: string, data: ScoreUpdate) => void = () => {};
  onPeerEndStats: (peerId: string, data: EndStats) => void = () => {};

  constructor(roomCode: string, localName: string, isHost: boolean) {
    this.roomCode = roomCode;
    this.localName = localName;
    this.isHost = isHost;
    this.room = joinRoom({ appId: APP_ID }, roomCode);

    const [sendPlayerInfo, onPlayerInfo] = this.room.makeAction<PlayerInfo>("playerInfo");
    const [sendSongSelect, onSongSelect] = this.room.makeAction<SongSelection>("songSelect");
    const [sendReady, onReady] = this.room.makeAction<ReadyStatus>("ready");
    const [sendStart, onStart] = this.room.makeAction<{}>("start");
    const [sendScore, onScore] = this.room.makeAction<ScoreUpdate>("score");
    const [sendEndStats, onEndStats] = this.room.makeAction<EndStats>("endStats");

    this.sendPlayerInfo = sendPlayerInfo;
    this.sendSongSelect = sendSongSelect;
    this.sendReady = sendReady;
    this.sendStart = sendStart;
    this.sendScore = sendScore;
    this.sendEndStats = sendEndStats;

    // Peer join/leave
    this.room.onPeerJoin((peerId) => {
      this.sendPlayerInfo({ name: this.localName }, [peerId]);
    });

    this.room.onPeerLeave((peerId) => {
      this.peers.delete(peerId);
      this.readyPeers.delete(peerId);
      this.onPeersChanged();
      this.checkAllReady();
    });

    onPlayerInfo((data, peerId) => {
      const isNew = !this.peers.has(peerId);
      this.peers.set(peerId, data);
      this.onPeersChanged();
      if (isNew) this.sendPlayerInfo({ name: this.localName }, [peerId]);
    });

    // Song lifecycle — handled entirely inside the room
    onSongSelect((data) => {
      this.resetReady();
      this.currentSong = data;
      this.downloadAndReady(data.songId);
    });

    onReady((_data, peerId) => {
      this.readyPeers.add(peerId);
      this.onPeersChanged();
      this.checkAllReady();
    });

    onStart(() => {
      this.fireGameReady();
    });

    // Pass-through for game
    onScore((data, peerId) => this.onPeerScore(peerId, data));
    onEndStats((data, peerId) => this.onPeerEndStats(peerId, data));
  }


  // --- Public: the ONE action ---

  selectSong(songId: string, diffI: number) {
    this.resetReady();
    this.currentSong = { songId, diffI };
    this.sendSongSelect({ songId, diffI });
    this.downloadAndReady(songId);
  }


  // --- Internal lifecycle ---

  private resetReady() {
    this.readyPeers.clear();
    this.localReady = false;
  }

  private async downloadAndReady(songId: string) {
    this.onStatusChange("downloading");
    await loadOrDownloadSong(songId);
    this.onStatusChange("ready");
    this.localReady = true;
    this.sendReady({ ready: true });
    this.checkAllReady();
  }

  private checkAllReady() {
    if (!this.localReady) return;
    if (this.readyPeers.size < this.peers.size) return;
    if (this.isHost) {
      this.sendStart({});
      this.fireGameReady();
    }
  }

  private fireGameReady() {
    if (this.currentSong) {
      this.onGameReady(this.currentSong.songId, this.currentSong.diffI);
    }
  }


  // --- Helpers ---

  isPeerReady(peerId: string): boolean {
    return this.readyPeers.has(peerId);
  }

  getPeerName(peerId: string): string {
    return this.peers.get(peerId)?.name ?? peerId.slice(0, 6);
  }

  leave() {
    this.room.leave();
    this.peers.clear();
    this.readyPeers.clear();
  }
}
