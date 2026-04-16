import { useState, useEffect, useRef } from "preact/hooks";
import { searchSongs, SearchFilters } from "../songs/bsApi.ts";
import { InfiniteScroll } from "../marketplace/utils/infScroll.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { SearchFilterPanel } from "./SearchFilters.tsx";
import { SongCard } from "./SongCard.tsx";

export function SongGrid({ title, onPlay }: { title: string; onPlay: (songId: string, diffI: number) => void }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  async function doSearch(q: string, p: number, f: SearchFilters, append = false) {
    if (!append) setLoading(true);
    const r = await searchSongs(q, p, f);
    setResults(prev => append ? [...prev, ...r] : r);
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
      <h2 className="text-xl font-semibold text-gray-300">{title}</h2>
      <div className="w-full max-w-xl">
        <SearchBar onSubmit={onSubmit}/>
      </div>
      <SearchFilterPanel filters={filters} onChange={onFiltersChange}/>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {results.map(song => <SongCard key={song.id} song={song} onPlay={onPlay}/>)}
      </div>
      <InfiniteScroll loadMore={loadNextPage}/>
      {loading && <div className="text-sm text-gray-500">Loading...</div>}
    </div>
  );
}
