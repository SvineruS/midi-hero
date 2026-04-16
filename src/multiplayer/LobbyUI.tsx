import { useState, useEffect, useRef } from "preact/hooks";
import { MultiplayerRoom, generateRoomCode } from "./room.ts";
import type { SongSelection } from "./types.ts";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import { AudioProvider } from "../marketplace/utils/audioContext.tsx";
import { SavedSongsProvider, useSavedSongs } from "../marketplace/utils/savedContext.tsx";
import { SongCard } from "../shared/SongCard.tsx";
import { SongGrid } from "../shared/SongGrid.tsx";


// --- Modal for create/join (overlays marketplace) ---

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
    const room = new MultiplayerRoom(code, playerName, true);
    onJoinLobby(room);
  }

  function joinRoom() {
    const code = codeInput.trim().toUpperCase();
    if (code.length !== 4) return;
    const playerName = saveName(name);
    const room = new MultiplayerRoom(code, playerName, false);
    onJoinLobby(room);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
         style={{ background: "rgba(5,2,12,0.75)", backdropFilter: "blur(8px)" }}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="w-full max-w-sm mx-4 p-6 rounded-xl flex flex-col gap-4"
           style={{ background: "rgba(16,12,30,0.95)", border: "1px solid rgba(80,226,227,0.25)",
                    boxShadow: "0 0 60px rgba(80,226,227,0.15), 0 0 120px rgba(241,100,236,0.1)" }}>

        <h2 className="text-2xl font-bold text-center text-white">Multiplayer</h2>

        <input type="text" placeholder="Your name" value={name}
               onInput={(e: any) => setName(e.target.value)}
               className="px-4 py-2.5 rounded-lg text-sm text-gray-200 placeholder-gray-500 outline-none focus:ring-1 focus:ring-cyan-500/50"
               style={{ background: "rgba(20,15,35,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}/>

        <button onClick={createRoom}
                className="btn-search px-4 py-3 rounded-lg text-sm font-semibold w-full">
          Create Room
        </button>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }}/>
          <span>or join</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }}/>
        </div>

        <div className="flex gap-2">
          <input type="text" placeholder="CODE" value={codeInput}
                 onInput={(e: any) => setCodeInput(e.target.value.toUpperCase())}
                 maxLength={4}
                 className="flex-1 px-4 py-2.5 rounded-lg text-sm text-gray-200 placeholder-gray-500 outline-none text-center tracking-[0.3em] uppercase font-mono focus:ring-1 focus:ring-green-500/50"
                 style={{ background: "rgba(20,15,35,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}/>
          <button onClick={joinRoom}
                  className="btn-play px-6 py-2.5 rounded-lg text-sm font-semibold">
            Join
          </button>
        </div>

        <button onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-300 transition mt-1 text-center">
          Cancel
        </button>
      </div>
    </div>
  );
}


// --- Full-page lobby (after room joined) ---

interface LobbyProps {
  session: MultiplayerRoom;
  onStartGame: (songId: string, diffI: number, session: MultiplayerRoom) => void;
  onCancel: () => void;
}

export default function LobbyUI({ session, onStartGame, onCancel }: LobbyProps) {
  const [peers, setPeers] = useState<string[]>([]);
  const [status, setStatus] = useState("Waiting for players...");
  const [downloading, setDownloading] = useState(false);
  const selectedSongRef = useRef<{ songId: string; diffI: number } | null>(null);

  function launchGame() {
    const sel = selectedSongRef.current;
    if (sel) onStartGame(sel.songId, sel.diffI, session);
  }

  useEffect(() => {
    session.onPeersChanged = () => {
      setPeers(Array.from(session.peers.keys()));
    };

    session.onSongSelected = async (sel: SongSelection) => {
      selectedSongRef.current = sel;
      setStatus("Downloading song...");
      setDownloading(true);
      try {
        await loadOrDownloadSong(sel.songId);
        session.markReady();
        setStatus("Ready! Waiting for others...");
      } catch (e) {
        setStatus("Download failed!");
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
    setDownloading(true);
    loadOrDownloadSong(songId).then(() => {
      session.markReady();
      setStatus("Ready! Waiting for others...");
      setDownloading(false);
    });
  }

  function handleCancel() {
    session.leave();
    onCancel();
  }

  return (
    <AudioProvider>
      <SavedSongsProvider>
        <div className="min-h-screen px-4 py-8 sm:px-8">

          {/* Lobby header */}
          <div className="max-w-3xl mx-auto mb-8 p-5 rounded-xl"
               style={{ background: "rgba(16,12,30,0.7)", border: "1px solid rgba(80,226,227,0.2)" }}>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Room</span>
                <span className="text-2xl font-mono font-bold tracking-[0.3em] px-3 py-0.5 rounded-md"
                      style={{ color: "#50e2e3", background: "rgba(80,226,227,0.08)", border: "1px solid rgba(80,226,227,0.3)" }}>
                  {session.roomCode}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(80,226,227,0.15)", color: "#50e2e3", border: "1px solid rgba(80,226,227,0.3)" }}>
                  {session.localName} (you)
                </span>
                {peers.map(peerId => (
                  <span key={peerId} className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: session.isPeerReady(peerId) ? "rgba(34,197,94,0.15)" : "rgba(241,100,236,0.1)",
                          color: session.isPeerReady(peerId) ? "#4ade80" : "#f164ec",
                          border: `1px solid ${session.isPeerReady(peerId) ? "rgba(34,197,94,0.3)" : "rgba(241,100,236,0.3)"}`,
                        }}>
                    {session.getPeerName(peerId)}
                    {session.isPeerReady(peerId) && " ✓"}
                  </span>
                ))}
              </div>

              <button onClick={handleCancel}
                      className="text-xs text-gray-500 hover:text-gray-300 transition">
                Leave
              </button>
            </div>

            {status && (
              <div className="text-center text-sm text-gray-400 mt-3">{status}</div>
            )}
          </div>

          {/* Song browser */}
          {!downloading && (
            <div className="flex flex-col gap-8">
              <SavedSongsSection onPlay={handleSongSelect}/>
              <SongGrid title="Search Songs" onPlay={handleSongSelect}/>
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
