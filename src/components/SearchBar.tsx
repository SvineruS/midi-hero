import { FaSearch } from "react-icons/fa";

export function SearchBar({ onSubmit }: { onSubmit: (query: string) => void }) {
  function search(e: any) {
    e.preventDefault();
    onSubmit(e.target.searchInput.value);
  }

  return (
    <form onSubmit={search}
          className="search-bar flex items-center rounded-lg p-2 border transition-colors focus-within:border-cyan-500/60">
      <FaSearch className="w-4 h-4 ml-2 text-gray-500 flex-shrink-0"/>
      <input type="text" name="searchInput" placeholder="Song name or author"
             className="flex-grow ml-3 bg-transparent border-none outline-none text-gray-200 text-sm placeholder-gray-500"/>
      <button type="submit"
              className="btn-search ml-2 px-4 py-1.5 rounded-md text-sm font-medium transition flex-shrink-0">
        Search
      </button>
    </form>
  );
}
