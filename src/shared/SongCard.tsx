import { FaGamepad } from "react-icons/fa";

export function SongCard({ song, onPlay }: { song: any; onPlay: (songId: string, diffI: number) => void }) {
  return (
    <div className="card-song rounded-lg p-3">
      <div className="text-sm font-semibold mb-2 truncate">
        <span className="text-gray-400">{song.songAuthor}</span>
        {" — "}
        <span className="text-gray-200">{song.songName}</span>
      </div>
      <div className="flex gap-3">
        <img src={song.coverURL} alt={song.songName}
             className="w-16 h-16 object-cover rounded-md flex-shrink-0"/>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0 overflow-hidden">
          {song.difficulties.map((diff: any, i: number) => (
            <button key={i} onClick={() => onPlay(song.id, i)}
                    className="btn-play flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition">
              <FaGamepad/>
              {`${diff.characteristic === "Standard" ? "" : `${diff.characteristic} `}${diff.name} (${diff.notesPerSecond.toFixed(1)} NPS)`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
