import { useState, useEffect, useRef } from "preact/hooks";
import { searchSongs, SearchFilters } from "../songs/bsApi.ts";

export function useSearch() {
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

  function loadNextPage() {
    if (loading) return;
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    doSearch(query, nextPage, filtersRef.current, true);
  }

  useEffect(() => { doSearch("", 0, {}); }, []);

  return { results, loading, filters, onSubmit, onFiltersChange, loadNextPage };
}
