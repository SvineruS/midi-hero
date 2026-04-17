import { useEffect, useState } from "preact/hooks";
import { FaGamepad, FaHeart, FaPlay, FaStop, FaTrashAlt } from "react-icons/fa";
import { findSimilarSongs } from "../songs/bsApi.ts";
import { AudioProvider, useAudio } from "./utils/audioContext.tsx";
import { SavedSongsProvider, useSavedSongs } from "./utils/savedContext.tsx";
import { InfiniteScroll } from "./utils/infScroll.tsx";
import { SearchBar } from "../shared/SearchBar.tsx";
import { SearchFilterPanel } from "../shared/SearchFilters.tsx";
import { useSearch } from "../shared/useSearch.ts";
import { formatSeconds } from "../shared/formatSeconds.ts";
import { SettingsModal } from "./SettingsModal.tsx";
import type { MultiplayerRoom } from "../multiplayer/room.ts";

type Tab = "search" | "saved" | "similar";

function App({ onPlay, onJoinLobby }: {
  onPlay: (songId: string, diffI: number) => void;
  onJoinLobby?: (session: MultiplayerRoom) => void;
}) {
  const [showMpModal, setShowMpModal] = useState(false);
  const [MpModal, setMpModal] = useState<any>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [tab, setTab] = useState<Tab>("saved");
  const [similarSongs, setSimilarSongs] = useState<any[]>([]);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [similarSource, setSimilarSource] = useState("");

  async function openMultiplayer() {
    if (!MpModal) {
      const { MultiplayerModal } = await import("../multiplayer/LobbyUI.tsx");
      setMpModal(() => MultiplayerModal);
    }
    setShowMpModal(true);
  }

  async function handleSimilar(songId: string, songName: string) {
    setTab("similar");
    setSimilarLoading(true);
    setSimilarSource(songName);
    setSimilarSongs([]);
    const results = await findSimilarSongs(songId);
    setSimilarSongs(results);
    setSimilarLoading(false);
  }

  return (
    <AudioProvider>
      <SavedSongsProvider>
        <div className="min-h-screen px-4 py-8 sm:px-8 relative">

          <button onClick={() => setShowSettings(true)}
                  className="settings-toggle fixed top-4 right-4 z-30"
                  title="Settings">{"\u2699\uFE0E"}</button>

          {showSettings && <SettingsModal onClose={() => setShowSettings(false)}/>}

          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                style={{ color: "#fff", textShadow: "0 0 30px rgba(80,226,227,0.5), 0 0 60px rgba(241,100,236,0.3)" }}>
              MIDI HERO
            </h1>
            {onJoinLobby && (
              <button onClick={openMultiplayer}
                      className="mt-3 text-sm text-gray-400 hover:text-cyan-400 transition">
                Play with friends &rarr;
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-8">
            <TabButton label="Search" active={tab === "search"} onClick={() => setTab("search")}/>
            <TabButton label="Saved" active={tab === "saved"} onClick={() => setTab("saved")}/>
            {similarSource && (
              <TabButton label={`Similar to ${similarSource}`} active={tab === "similar"} onClick={() => setTab("similar")}/>
            )}
          </div>

          <div style={{ display: tab === "search" ? "" : "none" }}>
            <Search onPlay={onPlay} onSimilar={handleSimilar}/>
          </div>
          <div style={{ display: tab === "saved" ? "" : "none" }}>
            <SavedSongs onPlay={onPlay} onSimilar={handleSimilar}/>
          </div>
          {similarSource && (
            <div style={{ display: tab === "similar" ? "" : "none" }}>
              <SimilarSection songs={similarSongs} loading={similarLoading}
                             onPlay={onPlay} onSimilar={handleSimilar}/>
            </div>
          )}
        </div>

        {showMpModal && MpModal && (
          <MpModal
            onClose={() => setShowMpModal(false)}
            onJoinLobby={(session: MultiplayerRoom) => {
              setShowMpModal(false);
              onJoinLobby?.(session);
            }}
          />
        )}
      </SavedSongsProvider>
    </AudioProvider>
  )
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
            className={`tab-btn ${active ? "active" : ""} px-4 py-2 text-sm font-medium rounded-lg transition truncate max-w-[200px]`}>
      {label}
    </button>
  );
}

function SimilarSection({ songs, loading, onPlay, onSimilar }: {
  songs: any[]; loading: boolean;
  onPlay: (songId: string, diffI: number) => void;
  onSimilar: (songId: string, songName: string) => void;
}) {
  if (loading) return <div className="text-center text-sm text-gray-500">Finding similar songs...</div>;
  if (!songs.length) return <div className="text-center text-sm text-gray-500">No similar songs found</div>;
  return <SongList songs={songs} onPlay={onPlay} onSimilar={onSimilar}/>;
}

function Search({ onPlay, onSimilar }: { onPlay: (songId: string, diffI: number) => void; onSimilar: (songId: string, songName: string) => void }) {
  const { results, loading, filters, onSubmit, onFiltersChange, loadNextPage } = useSearch();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-xl">
        <SearchBar onSubmit={onSubmit}/>
      </div>
      <SearchFilterPanel filters={filters} onChange={onFiltersChange}/>
      <SongList songs={results} onPlay={onPlay} onSimilar={onSimilar}/>
      <InfiniteScroll loadMore={loadNextPage}/>
      {loading && <div className="text-sm text-gray-500">Loading...</div>}
    </div>
  )
}

function SavedSongs({ onPlay, onSimilar }: { onPlay: (songId: string, diffI: number) => void; onSimilar: (songId: string, songName: string) => void }) {
  const { savedSongs } = useSavedSongs();

  if (!savedSongs.length) return <div className="text-center text-sm text-gray-500">No saved songs yet</div>;

  return <SongList songs={savedSongs} onPlay={onPlay} onSimilar={onSimilar}/>;
}


function SongList({ songs, onPlay, onSimilar }: { songs: any[], onPlay: (songId: string, diffI: number) => void; onSimilar?: (songId: string, songName: string) => void }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {songs.map(song => <Song key={song.id} song={song} onPlay={onPlay} onSimilar={onSimilar}/>)}
    </div>
  );
}

function Song({ song, onPlay, onSimilar }: { song: any, onPlay: (songId: string, diffI: number) => void; onSimilar?: (songId: string, songName: string) => void }) {
  const { currentUrl, playAudio, stopAudio } = useAudio();
  const isPlaying = currentUrl == song.previewURL;

  const { savedSongs, saveSong, removeSong } = useSavedSongs();
  const [isSaved, setIsSaved] = useState("no");

  useEffect(() => {
    const saved = savedSongs.find(s => s.id === song.id);
    setIsSaved(saved ? (saved._removed ? "no" : "yes") : "no");
  }, [savedSongs, song.id]);

  function listen(e) {
    e.stopPropagation();
    if (isPlaying) stopAudio();
    else playAudio(song.previewURL);
  }

  function play(e, diffI) {
    e.stopPropagation();
    onPlay(song.id, diffI);
  }

  async function save(e) {
    e.stopPropagation();
    if (isSaved == "yes") {
      setIsSaved("removing");
      await removeSong(song.id);
      setIsSaved("no");
    } else if (isSaved == "no") {
      setIsSaved("saving");
      try {
        await saveSong(song);
        setIsSaved("yes");
      } catch (e) {
        console.error(e)
        setIsSaved("no");
      }
    }
  }

  const isSavedOrSaving = isSaved == "yes" || isSaved == "saving";
  const isTransitioning = isSaved == "saving" || isSaved == "removing";

  return (
    <div className="card-song rounded-lg p-3 transition hover:scale-[1.01]">

      <div className="text-sm font-semibold mb-2 truncate">
        <span className="text-gray-400">{song.songAuthor}</span>
        {" — "}
        <span className="text-gray-200">{song.songName}</span>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <img src={song.coverURL} alt={song.songName}
               className="w-20 h-20 object-cover rounded-md"/>

          <button onClick={listen}
                  className={`btn-listen${isPlaying ? " active" : ""} w-20 flex items-center justify-center gap-1.5 px-2 py-1 text-xs rounded transition`}>
            {isPlaying ? <><FaStop/> Stop</> : <><FaPlay/> Listen</>}
          </button>

          <button onClick={save}
                  className={`btn-save${isSavedOrSaving ? " saved" : ""} w-20 flex items-center justify-center gap-1.5 px-2 py-1 text-xs rounded transition`}
                  style={{ opacity: isTransitioning ? 0.5 : 1 }}>
            {isSavedOrSaving ? <><FaTrashAlt/> Remove</> : <><FaHeart/> Save</>}
          </button>

          {onSimilar && (
            <button onClick={(e) => { e.stopPropagation(); onSimilar(song.id, song.songName); }}
                    className="btn-listen w-20 flex items-center justify-center px-2 py-1 text-xs rounded transition">
              Similar
            </button>
          )}
        </div>

        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-500 mb-2">
            <span>{formatSeconds(song.duration)}</span>
            <span>{song.bpm} BPM</span>
            <span>{'★'} {(song.score * 10).toFixed(1)}</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {song.difficulties.map((diff, index) => (
              <button key={index} onClick={(e) => play(e, index)}
                      className="btn-play flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition">
                <FaGamepad/>
                {`${diff.characteristic == "Standard" ? "" : `${diff.characteristic} `}${diff.name} (${diff.notesPerSecond.toFixed(1)} NPS)`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
