import { useState, useRef } from "preact/hooks";
import type { SearchFilters } from "../songs/bsApi.ts";

const SORT_OPTIONS = ["Rating", "Latest", "Relevance", "Curated", "Random"] as const;

const GENRE_TAGS = [
  "electronic", "pop", "rock", "dance", "anime", "metal", "hip-hop-rap",
  "alternative", "j-pop", "j-rock", "k-pop", "indie", "dubstep",
  "drum-and-bass", "techno", "house", "trance", "hardcore", "nightcore",
  "folk-acoustic", "classical-orchestral", "jazz", "funk-disco", "ambient",
  "soul", "punk", "rb", "vocaloid", "instrumental", "video-game-soundtrack",
  "tv-movie-soundtrack", "comedy-meme",
];

const STYLE_TAGS = [
  "tech", "speed", "dance-style", "challenge", "accuracy", "balanced",
  "fitness", "swing",
];

export function SearchFilterPanel({ filters, onChange }: {
  filters: SearchFilters;
  onChange: (f: SearchFilters) => void;
}) {
  const [open, setOpen] = useState(false);

  function setFilter<K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) {
    onChange({ ...filters, [key]: value });
  }

  function toggleTag(tag: string) {
    const current = filters.tags || [];
    const next = current.includes(tag)
      ? current.filter(t => t !== tag)
      : [...current, tag];
    setFilter("tags", next);
  }

  return (
    <div className="w-full max-w-xl">
      <button onClick={() => setOpen(!open)}
              className="text-xs text-gray-500 hover:text-gray-300 transition mb-2">
        {open ? "Hide filters ▴" : "Show filters ▾"}
      </button>

      {open && (
        <div className="filter-panel flex flex-col gap-4 p-4 rounded-lg mb-4">

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="filter-label">Sort</span>
            <select value={filters.order || "Rating"}
                    onChange={(e: any) => setFilter("order", e.target.value)}
                    className="filter-select px-3 py-1.5 rounded-md text-sm">
              {SORT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* NPS range */}
          <div className="flex items-center gap-3">
            <span className="filter-label">NPS</span>
            <DualRange min={0} max={20} step={0.5}
                       low={filters.minNps || 0}
                       high={filters.maxNps || 20}
                       onChange={(lo, hi) => onChange({
                         ...filters,
                         minNps: lo > 0 ? lo : undefined,
                         maxNps: hi < 20 ? hi : undefined,
                       })}/>
          </div>

          {/* Genre tags */}
          <div>
            <span className="filter-label mb-2 block">Genre</span>
            <div className="flex flex-wrap gap-1.5">
              {GENRE_TAGS.map(tag => (
                <button key={tag} onClick={() => toggleTag(tag)}
                        className={`filter-tag ${(filters.tags || []).includes(tag) ? "active" : ""}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Style tags */}
          <div>
            <span className="filter-label mb-2 block">Style</span>
            <div className="flex flex-wrap gap-1.5">
              {STYLE_TAGS.map(tag => (
                <button key={tag} onClick={() => toggleTag(tag)}
                        className={`filter-tag ${(filters.tags || []).includes(tag) ? "active" : ""}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function DualRange({ min, max, step, low, high, onChange }: {
  min: number; max: number; step: number;
  low: number; high: number;
  onChange: (low: number, high: number) => void;
}) {
  const pctLow = ((low - min) / (max - min)) * 100;
  const pctHigh = ((high - min) / (max - min)) * 100;

  return (
    <div className="flex-1 flex items-center gap-3">
      <span className="text-xs text-gray-400 w-8 text-right tabular-nums">{low}</span>
      <div className="dual-range flex-1">
        <div className="dual-range-track"/>
        <div className="dual-range-fill" style={{ left: `${pctLow}%`, right: `${100 - pctHigh}%` }}/>
        <input type="range" min={min} max={max} step={step} value={low}
               onInput={(e: any) => {
                 const v = Math.min(+e.target.value, high);
                 onChange(v, high);
               }}/>
        <input type="range" min={min} max={max} step={step} value={high}
               onInput={(e: any) => {
                 const v = Math.max(+e.target.value, low);
                 onChange(low, v);
               }}/>
      </div>
      <span className="text-xs text-gray-400 w-8 tabular-nums">{high}</span>
    </div>
  );
}
