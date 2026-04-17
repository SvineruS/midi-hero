import { useState, useEffect } from "preact/hooks";
import { MultiplayerRoom, generateRoomCode } from "../multiplayer/room.ts";
import Marketplace from "../marketplace/Marketplace.tsx";


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
    onJoinLobby(new MultiplayerRoom(generateRoomCode(), saveName(name), true));
  }

  function joinRoom() {
    const code = codeInput.trim().toUpperCase();
    if (code.length !== 4) return;
    onJoinLobby(new MultiplayerRoom(code, saveName(name), false));
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


// --- Lobby header bar ---

function LobbyHeader({ session, onCancel }: { session: MultiplayerRoom; onCancel: () => void }) {
  const [peers, setPeers] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"" | "downloading" | "ready">("");
  const [copied, setCopied] = useState(false);

  function copyCode() {
    navigator.clipboard.writeText(session.roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  useEffect(() => {
    session.onPeersChanged = () => setPeers([...session.peers.keys()]);
    session.onStatusChange = (s) => {
      if (s === "downloading") { setStatus("Downloading song..."); setStatusType("downloading"); }
      else if (s === "ready") { setStatus("Ready! Waiting for others..."); setStatusType("ready"); }
      else { setStatus(""); setStatusType(""); }
    };
  }, [session]);

  return (
    <div className="lobby-card max-w-6xl mx-auto mb-6 rounded-xl overflow-hidden">
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
        <button onClick={onCancel}
                className="btn-leave px-3 py-1.5 rounded-md text-xs font-medium">
          Leave Room
        </button>
      </div>

      <div className="px-5 py-3">
        <div className="flex flex-wrap gap-2 mb-2">
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
        {status ? (
          <div className={`lobby-status ${statusType} text-sm`}>{status}</div>
        ) : peers.length === 0 ? (
          <div className="lobby-status text-sm">Share the room code to invite players</div>
        ) : null}
      </div>
    </div>
  );
}


// --- Full lobby page: header + marketplace App ---

export default function LobbyUI({ session, onCancel }: {
  session: MultiplayerRoom;
  onCancel: () => void;
}) {
  function handlePlay(songId: string, diffI: number) {
    session.selectSong(songId, diffI);
  }

  return (
    <div>
      <div className="px-4 pt-8 sm:px-8">
        <LobbyHeader session={session} onCancel={onCancel}/>
      </div>
      <Marketplace onPlay={handlePlay}/>
    </div>
  );
}
