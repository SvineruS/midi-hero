import { InfiniteScroll } from "./infScroll.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { SearchFilterPanel } from "./SearchFilters.tsx";
import { SongCard } from "./SongCard.tsx";
import { useSearch } from "../marketplace/utils/useSearch.ts";

export function SongGrid({ title, onPlay }: { title: string; onPlay: (songId: string, diffI: number) => void }) {
  const { results, loading, filters, onSubmit, onFiltersChange, loadNextPage } = useSearch();

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
