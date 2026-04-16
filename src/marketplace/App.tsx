import { useEffect, useState, useRef } from "preact/hooks";
import { FaGamepad, FaHeart, FaPlay, FaStop, FaTrashAlt } from "react-icons/fa";
import { searchSongs, SearchFilters } from "../songs/bsApi.ts";
import { AudioProvider, useAudio } from "./utils/audioContext.tsx";
import { SavedSongsProvider, useSavedSongs } from "./utils/savedContext.tsx";
import { InfiniteScroll } from "./utils/infScroll.tsx";
import { SearchBar } from "../shared/SearchBar.tsx";
import { SearchFilterPanel } from "../shared/SearchFilters.tsx";
import { formatSeconds } from "../shared/formatSeconds.ts";
import type { MultiplayerRoom } from "../multiplayer/room.ts";

function App({ onPlay, onJoinLobby }: {
  onPlay: (songId: string, diffI: number) => void;
  onJoinLobby?: (session: MultiplayerRoom) => void;
}) {
  const [showMpModal, setShowMpModal] = useState(false);
  const [MpModal, setMpModal] = useState<any>(null);

  async function openMultiplayer() {
    if (!MpModal) {
      const { MultiplayerModal } = await import("../multiplayer/LobbyUI.tsx");
      setMpModal(() => MultiplayerModal);
    }
    setShowMpModal(true);
  }

  return (
    <AudioProvider>
      <SavedSongsProvider>
        <div className="min-h-screen px-4 py-8 sm:px-8">

          <div className="text-center mb-10">
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

          <SavedSongs onPlay={onPlay}/>
          <Search onPlay={onPlay}/>
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

function Search({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  async function doSearch(q: string, p: number, f: SearchFilters, append = false) {
    if (!append) setLoading(true);
    const results = await searchSongs(q, p, f);
    setSearchResults(prev => append ? [...prev, ...results] : results);
    setLoading(false);
  }

  function onSubmit(q: string) {
    setQuery(q);
    setPage(0);
    doSearch(q, 0, filtersRef.current);
  }

  function onFiltersChange(f: SearchFilters) {
    setFilters(f);
    setPage(0);
    doSearch(query, 0, f);
  }

  async function loadNextPage() {
    if (loading) return;
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    doSearch(query, nextPage, filtersRef.current, true);
  }

  useEffect(() => { doSearch("", 0, {}); }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-300">Search for a Song</h2>
      <div className="w-full max-w-xl">
        <SearchBar onSubmit={onSubmit}/>
      </div>
      <SearchFilterPanel filters={filters} onChange={onFiltersChange}/>
      <SongList songs={searchResults} onPlay={onPlay}/>
      <InfiniteScroll loadMore={loadNextPage}/>
      {loading && <div className="text-sm text-gray-500">Loading...</div>}
    </div>
  )
}

function SavedSongs({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  const { savedSongs } = useSavedSongs();
  if (!savedSongs.length) return null;

  return (
    <div className="flex flex-col items-center gap-4 mb-10 w-full">
      <h2 className="text-xl font-semibold text-gray-300">Saved Songs</h2>
      <SongList songs={savedSongs} onPlay={onPlay}/>
    </div>
  )
}

function SongList({ songs, onPlay }: { songs: any[], onPlay: (songId: string, diffI: number) => void }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {songs.map(song => <Song key={song.id} song={song} onPlay={onPlay}/>)}
    </div>
  );
}

function Song({ song, onPlay }: { song: any, onPlay: (songId: string, diffI: number) => void }) {
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
