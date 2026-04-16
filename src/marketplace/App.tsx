import { useEffect, useRef, useState } from "preact/hooks";
import { FaGamepad, FaHeart, FaPlay, FaSearch, FaStop, FaTrashAlt } from "react-icons/fa";
import { searchSongs } from "../songs/bsApi.ts";
import { AudioProvider, useAudio } from "./utils/audioContext.tsx";
import { SavedSongsProvider, useSavedSongs } from "./utils/savedContext.tsx";
import { InfiniteScroll } from "./utils/infScroll.tsx";

function App({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  return (
    <AudioProvider>
      <SavedSongsProvider>
        <div className="p-8 flex flex-col items-center gap-4">
          <SavedSongs onPlay={onPlay}/>
          <Search onPlay={onPlay}/>
        </div>
      </SavedSongsProvider>
    </AudioProvider>
  )

}

function Search({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(query_) {
    const results = await searchSongs(query_);
    setQuery(query_);
    setPage(0);
    setSearchResults(results);
  }

  async function loadNextPage() {
    if (loading) return;
    setLoading(true);
    const nextPage = page + 1;
    const results = await searchSongs(query, nextPage);
    setPage(nextPage);
    setSearchResults(prev => [...prev, ...results]);
    setLoading(false);
  }

  useEffect(() => {
    onSubmit("");
  }, []);


  return (
    <div className="p-8 flex flex-col items-center gap-4">

      <h1 className="text-2xl font-bold text-gray-800">Search for a Song</h1>

      <div className="w-full max-w-2xl">
        <SearchBar onSubmit={onSubmit}/>
      </div>

      <SongList songs={searchResults} onPlay={onPlay}/>

      <InfiniteScroll loadMore={loadNextPage}/>
    </div>
  )
}

function SearchBar({ onSubmit }) {
  async function search(e) {
    e.preventDefault();
    await onSubmit(e.target.searchInput.value);
  }


  return (
    <form onSubmit={search} className="flex items-center bg-white rounded-lg shadow-md p-2">
      <FaSearch className="text-gray-400 w-5 h-5 ml-2"/>
      <input type="text" name="searchInput" placeholder="Song name or author"
             className="flex-grow ml-2 bg-transparent border-none outline-none text-gray-800 text-sm"/>
      <button type="submit"
              className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition">
        Search
      </button>
    </form>
  );
}


function SavedSongs({ onPlay }: { onPlay: (songId: string, diffI: number) => void }) {
  const { savedSongs } = useSavedSongs(); // Use the saved songs context

  return <div className="p-8 flex flex-col items-center gap-4">
    <h1 className="text-2xl font-bold text-gray-800">Saved songs</h1>
    <SongList songs={savedSongs} onPlay={onPlay}/>
  </div>

}


function SongList({ songs, onPlay }: { songs: any[], onPlay: (songId: string, diffI: number) => void }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {songs.map(song => <Song key={song.id} song={song} onPlay={onPlay}/>)}
    </div>
  );
}

function Song({ song, onPlay }: { song: any, onPlay: (songId: string, diffI: number) => void }) {
  const { currentUrl, playAudio, stopAudio } = useAudio(); // Use the audio context
  const isPlaying = currentUrl == song.previewURL;

  const { savedSongs, saveSong, removeSong } = useSavedSongs(); // Use the saved songs context
  const [isSaved, setIsSaved] = useState("no");

  useEffect(() => {
    setIsSaved(savedSongs.some(savedSong => savedSong.id === song.id) ? "yes" : "no");
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
      // Remove the song from saved songs
      setIsSaved("removing");
      await removeSong(song.id);
      setIsSaved("no");
    } else if (isSaved == "no") {
      // Save the song
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


  return (
    <div
      className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 cursor-pointer transition w-96">

      <div className="text-base font-bold text-gray-600 group-hover:text-blue-600">
        <span>{song.songAuthor}</span>
        {" - "}
        <span className="text-gray-700 group-hover:text-blue-600">{song.songName}</span>
      </div>

      <div className="flex items-start">
        <div>
          <img src={song.coverURL} alt={song.songName} className="w-20 h-20 object-cover rounded-md flex-shrink-0"/>


          {/* Action Buttons */}
          <div className="mt-2 flex flex-col gap-1 justify-between">

            <button onClick={listen}
                    className={`flex items-center gap-2 px-2 py-1 text-white rounded shadow focus:outline-none transition bg-blue-500 hover:bg-blue-600`}>
              {isPlaying ? <><FaStop/> Stop</> : <><FaPlay/> Listen</>}
            </button>

            <button onClick={save}
                    className={`flex items-center gap-2 px-2 py-1 text-white rounded shadow focus:outline-none transition
                    ${(isSaved == "yes" || isSaved == "saving") ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'}
                    ${(isSaved == "saving" || isSaved == "removing") ? 'disabled' : ''}`}
            >
              {(isSaved == "yes" || isSaved == "saving") ? (<><FaTrashAlt/> Remove </>) : (<><FaHeart/> Save </>)}
            </button>

          </div>
        </div>

        {/* Song Details */}
        <div className="ml-4 flex-1">

          {/* Meta Info */}
          <div className="mt-2 flex justify-between w-full text-xs text-gray-600">
            <div>{formatSeconds(song.duration)}</div>
            <div>{song.bpm} BPM</div>
            <div>⭐ {(song.score * 10).toFixed(2)}</div>
          </div>

          {/*Difficulties*/}
          <div className="mt-2 flex flex-wrap gap-1">
            {song.difficulties.map((diff, index) => (
              <button key={index} onClick={(e) => play(e, index)}
                      className="flex items-center gap-2 px-2 py-1 bg-green-500 text-white rounded shadow hover:bg-green-600 focus:outline-none transition"
              >
                <FaGamepad/> {`${diff.characteristic == "Standard" ? "" : `${diff.characteristic} `}${diff.name} (${diff.notesPerSecond.toFixed(2)} NPS)`}
              </button>
            ))}
          </div>

        </div>

      </div>


    </div>
  );
}


function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export default App
