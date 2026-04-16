import { joinRoom, Room } from "trystero/nostr";
import type { PlayerInfo, SongSelection, ReadyStatus, ScoreUpdate, EndStats } from "./types.ts";

const APP_ID = "midi-hero";

export function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I/O/0/1 to avoid confusion
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

  // Send functions (assigned in constructor)
  sendPlayerInfo!: (data: PlayerInfo, targetPeers?: string[]) => void;
  sendSongSelect!: (data: SongSelection) => void;
  sendReady!: (data: ReadyStatus) => void;
  sendStart!: (data: {}) => void;
  sendScore!: (data: ScoreUpdate) => void;
  sendEndStats!: (data: EndStats) => void;

  // Callbacks (set by consumers)
  onPeersChanged: () => void = () => {};
  onSongSelected: (sel: SongSelection, fromPeerId: string) => void = () => {};
  onAllReady: () => void = () => {};
  onStart: () => void = () => {};
  onPeerScore: (peerId: string, data: ScoreUpdate) => void = () => {};
  onPeerEndStats: (peerId: string, data: EndStats) => void = () => {};

  private readyPeers = new Set<string>();
  private localReady = false;

  constructor(roomCode: string, localName: string, isHost: boolean) {
    this.roomCode = roomCode;
    this.localName = localName;
    this.isHost = isHost;

    this.room = joinRoom({ appId: APP_ID }, roomCode);

    // Define actions
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

    // Peer join: store and exchange info
    this.room.onPeerJoin((peerId) => {
      console.log("[MP] peer joined:", peerId);
      this.sendPlayerInfo({ name: this.localName }, [peerId]);
    });

    // Peer leave: remove
    this.room.onPeerLeave((peerId) => {
      console.log("[MP] peer left:", peerId);
      this.peers.delete(peerId);
      this.readyPeers.delete(peerId);
      this.onPeersChanged();
    });

    // Receive player info — only reply if this peer is new (prevents infinite ping-pong)
    onPlayerInfo((data, peerId) => {
      const isNew = !this.peers.has(peerId);
      this.peers.set(peerId, data);
      this.onPeersChanged();
      if (isNew) {
        this.sendPlayerInfo({ name: this.localName }, [peerId]);
      }
    });

    // Song selection
    onSongSelect((data, peerId) => {
      this.readyPeers.clear();
      this.localReady = false;
      this.onSongSelected(data, peerId);
    });

    // Ready status
    onReady((_data, peerId) => {
      this.readyPeers.add(peerId);
      this.onPeersChanged();
      this.checkAllReady();
    });

    // Start signal
    onStart(() => {
      this.onStart();
    });

    // Live scores
    onScore((data, peerId) => {
      this.onPeerScore(peerId, data);
    });

    // End stats
    onEndStats((data, peerId) => {
      this.onPeerEndStats(peerId, data);
    });
  }

  markReady() {
    this.localReady = true;
    this.sendReady({ ready: true });
    this.checkAllReady();
  }

  private checkAllReady() {
    if (!this.localReady) return;
    if (this.readyPeers.size < this.peers.size) return;
    this.onAllReady();
  }

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
