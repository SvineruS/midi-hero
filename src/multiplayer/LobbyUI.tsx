import { useState, useEffect, useRef } from "preact/hooks";
import { MultiplayerRoom, generateRoomCode } from "./room.ts";
import type { SongSelection } from "./types.ts";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import { AudioProvider } from "../marketplace/utils/audioContext.tsx";
import { SavedSongsProvider, useSavedSongs } from "../marketplace/utils/savedContext.tsx";
import { SongCard } from "../shared/SongCard.tsx";
import { SongGrid } from "../shared/SongGrid.tsx";


// --- Modal for create/join ---

export function MultiplayerModal({ onClose, onJoinLobby }: {
  onClose: () => void;
  onJoinLobby: (session: MultiplayerRoom) => void;
}) {
  const [name, setName] = useState(localStorage.getItem("mp-name") || "");
  const [codeInput, setCodeInput] = useState("");

  function saveName(n: string) {
    localStorage.setItem("mp-name", n);
    return n || "Player";
  }

  function createRoom() {
    const playerName = saveName(name);
    const code = generateRoomCode();
    onJoinLobby(new MultiplayerRoom(code, playerName, true));
  }

  function joinRoom() {
    const code = codeInput.trim().toUpperCase();
    if (code.length !== 4) return;
    const playerName = saveName(name);
    onJoinLobby(new MultiplayerRoom(code, playerName, false));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
         style={{ background: "rgba(5,2,12,0.75)", backdropFilter: "blur(8px)" }}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mp-modal w-full max-w-sm mx-4 p-6 rounded-xl flex flex-col gap-5">

        <h2 className="text-2xl font-bold text-center"
            style={{ color: "#fff", textShadow: "0 0 20px rgba(80,226,227,0.4)" }}>
          Multiplayer
        </h2>

        <input type="text" placeholder="Your name" value={name}
               onInput={(e: any) => setName(e.target.value)}
               className="mp-input px-4 py-2.5 rounded-lg text-sm placeholder-gray-500"/>

        <button onClick={createRoom}
                className="btn-search px-4 py-3 rounded-lg text-sm font-semibold w-full">
          Create Room
        </button>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex-1 h-px mp-divider"/>
          <span>or join existing</span>
          <div className="flex-1 h-px mp-divider"/>
        </div>

        <div className="flex gap-2">
          <input type="text" placeholder="CODE" value={codeInput}
                 onInput={(e: any) => setCodeInput(e.target.value.toUpperCase())}
                 maxLength={4}
                 className="mp-input flex-1 px-4 py-2.5 rounded-lg text-sm text-center tracking-[0.3em] uppercase font-mono placeholder-gray-500"/>
          <button onClick={joinRoom}
                  className="btn-play px-6 py-2.5 rounded-lg text-sm font-semibold">
            Join
          </button>
        </div>

        <button onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-300 transition text-center">
          Cancel
        </button>
      </div>
    </div>
  );
}


// --- Full-page lobby ---

interface LobbyProps {
  session: MultiplayerRoom;
  onStartGame: (songId: string, diffI: number, session: MultiplayerRoom) => void;
  onCancel: () => void;
}

export default function LobbyUI({ session, onStartGame, onCancel }: LobbyProps) {
  const [peers, setPeers] = useState<string[]>([]);
  const [status, setStatus] = useState("Waiting for players...");
  const [statusType, setStatusType] = useState<"" | "downloading" | "ready">("");
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const selectedSongRef = useRef<{ songId: string; diffI: number } | null>(null);

  function launchGame() {
    const sel = selectedSongRef.current;
    if (sel) onStartGame(sel.songId, sel.diffI, session);
  }

  function copyCode() {
    navigator.clipboard.writeText(session.roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  useEffect(() => {
    session.onPeersChanged = () => {
      setPeers(Array.from(session.peers.keys()));
    };

    session.onSongSelected = async (sel: SongSelection) => {
      selectedSongRef.current = sel;
      setStatus("Downloading song...");
      setStatusType("downloading");
      setDownloading(true);
      try {
        await loadOrDownloadSong(sel.songId);
        session.markReady();
        setStatus("Ready! Waiting for others...");
        setStatusType("ready");
      } catch (e) {
        setStatus("Download failed!");
        setStatusType("");
        console.error(e);
      }
      setDownloading(false);
    };

    session.onAllReady = () => {
      if (session.isHost) {
        session.sendStart({});
        launchGame();
      }
    };

    session.onStart = () => {
      launchGame();
    };
  }, [session]);

  function handleSongSelect(songId: string, diffI: number) {
    if (downloading) return;
    selectedSongRef.current = { songId, diffI };
    session.sendSongSelect({ songId, diffI });

    setStatus("Downloading song...");
    setStatusType("downloading");
    setDownloading(true);
    loadOrDownloadSong(songId).then(() => {
      session.markReady();
      setStatus("Ready! Waiting for others...");
      setStatusType("ready");
      setDownloading(false);
    });
  }

  return (
    <AudioProvider>
      <SavedSongsProvider>
        <div className="min-h-screen px-4 py-8 sm:px-8">

          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
              style={{ color: "#fff", textShadow: "0 0 30px rgba(80,226,227,0.5), 0 0 60px rgba(241,100,236,0.3)" }}>
            MIDI HERO
          </h1>

          {/* Lobby card */}
          <div className="lobby-card max-w-6xl mx-auto mb-8 rounded-xl overflow-hidden">

            {/* Room code bar */}
            <div className="flex items-center justify-between px-5 py-3"
                 style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-gray-500">Room</span>
                <button onClick={copyCode}
                        className="room-code text-xl font-mono font-bold tracking-[0.3em] px-3 py-1 rounded-md">
                  {session.roomCode}
                </button>
                {copied && <span className="text-xs text-green-400">Copied!</span>}
              </div>
              <button onClick={() => { session.leave(); onCancel(); }}
                      className="btn-leave px-3 py-1.5 rounded-md text-xs font-medium">
                Leave Room
              </button>
            </div>

            {/* Players + status */}
            <div className="px-5 py-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="player-pill px-3 py-1.5 rounded-full text-xs font-medium">
                  {session.localName} (you)
                </span>
                {peers.map(peerId => (
                  <span key={peerId}
                        className={`player-pill ${session.isPeerReady(peerId) ? "ready" : "peer"} px-3 py-1.5 rounded-full text-xs font-medium`}>
                    {session.getPeerName(peerId)}
                    {session.isPeerReady(peerId) && " ✓"}
                  </span>
                ))}
              </div>

              <div className={`lobby-status ${statusType} text-sm`}>
                {peers.length === 0 ? "Share the room code to invite players" : status}
              </div>
            </div>
          </div>

          {/* Song browser */}
          {!downloading && (
            <div className="flex flex-col gap-8">
              <SavedSongsSection onPlay={handleSongSelect}/>
              <SongGrid title="Pick a song for everyone" onPlay={handleSongSelect}/>
            </div>
          )}
        </div>
      </SavedSongsProvider>
    </AudioProvider>
  );
}


function SavedSongsSection({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  const { savedSongs } = useSavedSongs();
  if (!savedSongs.length) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-300">Saved Songs</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {savedSongs.map((song: any) => <SongCard key={song.id} song={song} onPlay={onPlay}/>)}
      </div>
    </div>
  );
}
