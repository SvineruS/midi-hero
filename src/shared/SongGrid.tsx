import { useState, useEffect } from "preact/hooks";
import { searchSongs } from "../songs/bsApi.ts";
import { InfiniteScroll } from "../marketplace/utils/infScroll.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { SongCard } from "./SongCard.tsx";

export function SongGrid({ title, onPlay }: { title: string; onPlay: (songId: string, diffI: number) => void }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(q: string) {
    const r = await searchSongs(q);
    setQuery(q);
    setPage(0);
    setResults(r);
  }

  async function loadNextPage() {
    if (loading) return;
    setLoading(true);
    const nextPage = page + 1;
    const r = await searchSongs(query, nextPage);
    setPage(nextPage);
    setResults(prev => [...prev, ...r]);
    setLoading(false);
  }

  useEffect(() => { onSubmit(""); }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-xl font-semibold text-gray-300">{title}</h2>
      <div className="w-full max-w-xl">
        <SearchBar onSubmit={onSubmit}/>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {results.map(song => <SongCard key={song.id} song={song} onPlay={onPlay}/>)}
      </div>
      <InfiniteScroll loadMore={loadNextPage}/>
      {loading && <div className="text-sm text-gray-500">Loading...</div>}
    </div>
  );
}
