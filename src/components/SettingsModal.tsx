import { useState } from "preact/hooks";
import { useSavedSongs } from "../marketplace/utils/savedContext.tsx";
import { exportSongIds, parseSongIds, importSongs } from "../utils/songTransfer.ts";

export function SettingsModal({ onClose }: { onClose: () => void }) {
  const { savedSongs, saveSong } = useSavedSongs();
  const [importing, setImporting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleExport() {
    navigator.clipboard.writeText(exportSongIds(savedSongs));
    setStatus("Copied to clipboard!");
    setTimeout(() => setStatus(""), 2000);
  }

  async function handleImport() {
    const text = prompt("Paste song IDs (JSON array):");
    if (!text) return;
    const ids = parseSongIds(text);
    if (!ids) { setStatus("Invalid format — expected JSON array of song IDs"); return; }
    const existingIds = new Set(savedSongs.map(s => s.id));
    if (ids.every(id => existingIds.has(id))) { setStatus("All songs already saved"); return; }
    setImporting(true);
    setStatus("Importing...");
    const count = await importSongs(ids, existingIds, saveSong, (done, total) => {
      setStatus(`Importing ${done}/${total}...`);
    });
    setStatus(`Done! Imported ${count} songs`);
    setImporting(false);
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
         style={{ background: "rgba(5,2,12,0.75)", backdropFilter: "blur(8px)" }}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mp-modal w-full max-w-sm mx-4 p-6 rounded-xl flex flex-col gap-5">

        <h2 className="text-2xl font-bold text-center"
            style={{ color: "#fff", textShadow: "0 0 20px rgba(80,226,227,0.4)" }}>
          Settings
        </h2>

        <div className="flex flex-col gap-2">
          <button onClick={handleExport} disabled={!savedSongs.length}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition text-left"
                  style={{ opacity: savedSongs.length ? 1 : 0.4 }}>
            Export saved songs
          </button>
          <button onClick={handleImport} disabled={importing}
                  className="text-sm text-gray-400 hover:text-green-400 transition text-left"
                  style={{ opacity: importing ? 0.4 : 1 }}>
            Import songs
          </button>
          {status && <div className="text-xs text-gray-400 text-center mt-1">{status}</div>}
        </div>

        <button onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-300 transition text-center mt-2">
          Close
        </button>
      </div>
    </div>
  );
}
