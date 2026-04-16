import JSZip from "jszip";
import { parseDifficultyFile } from "./songParser.ts";

export interface SearchFilters {
  minNps?: number;
  maxNps?: number;
  tags?: string[];
  order?: "Latest" | "Relevance" | "Rating" | "Curated" | "Random";
}

export async function searchSongs(query: string, page = 0, filters: SearchFilters = {}) {
  const params = new URLSearchParams({ q: query });
  if (filters.minNps) params.set("minNps", String(filters.minNps));
  if (filters.maxNps) params.set("maxNps", String(filters.maxNps));
  if (filters.tags?.length) params.set("tags", filters.tags.join("|"));
  params.set("sortOrder", filters.order || "Rating");

  const response = await fetch(`https://api.beatsaver.com/search/v1/${page}?${params}`);
  const data = await response.json();
  return data.docs.map(parseAnswerSong);
}

export async function searchSongById(songId) {
  console.log("Searching for song by id", songId);
  const response = await fetch(`https://api.beatsaver.com/maps/id/${songId}`);
  const data = await response.json();
  return parseAnswerSong(data);
}


export async function downloadSong(songMeta) {
  console.log("Downloading song", songMeta.id);

  const response = await fetch(songMeta.downloadURL);
  const zipData = await response.arrayBuffer();

  const jszip = new JSZip();
  const zip = await jszip.loadAsync(zipData);

  const infoFile = zip.file("info.dat") || zip.file("Info.dat");
  if (!infoFile) throw new Error("No info.dat file found in the zip.");

  const info = JSON.parse(await infoFile.async("text"));


  const songPath = info._songFilename;
  const startBpm = info._beatsPerMinute;

  const difficulties = [];
  const allLightEvents = [];

  for (const mode of info._difficultyBeatmapSets)
    for (const diff of mode._difficultyBeatmaps) {
      const diffFile = await zip.file(diff._beatmapFilename).async("text");
      const { notes, lightEvents } = parseDifficultyFile(diffFile, startBpm);
      if (!notes.length) continue;
      difficulties.push({
        difficulty: diff._difficulty,
        characteristic: mode._beatmapCharacteristicName,
        rank: diff._difficultyRank,
        notes,
      })
      allLightEvents.push(lightEvents);
    }

  const longestLightEvents = allLightEvents.reduce((a, b) => a.length > b.length ? a : b, []);

  const songData = { difficulties, lightEvents: longestLightEvents }
  const songFile = await zip.file(songPath).async("blob");

  return { audio: songFile, meta: songMeta, songData }
}


const similarCache = new Map<string, any[]>();

export async function findSimilarSongs(songId: string): Promise<any[]> {
  if (similarCache.has(songId)) return similarCache.get(songId)!;

  // 1. Find playlists containing this song
  const plRes = await fetch(`https://api.beatsaver.com/playlists/map/${songId}/0`);
  const plData = await plRes.json();
  const playlists = (plData.docs || []).slice(0, 8);

  if (!playlists.length) {
    similarCache.set(songId, []);
    return [];
  }

  // 2. Fetch contents of each playlist (in parallel, first page only)
  const contentPromises = playlists.map(async (pl: any) => {
    const res = await fetch(`https://api.beatsaver.com/playlists/id/${pl.playlistId}/0`);
    const data = await res.json();
    return (data.maps || []).map((m: any) => m.map);
  });
  const allMaps = (await Promise.all(contentPromises)).flat();

  // 3. Count frequency (how many playlists each song appeared in), exclude the source song
  const freq = new Map<string, { count: number; song: any }>();
  for (const map of allMaps) {
    if (!map || map.id === songId) continue;
    const existing = freq.get(map.id);
    if (existing) {
      existing.count++;
    } else {
      freq.set(map.id, { count: 1, song: map });
    }
  }

  // 4. Sort by frequency descending, take top 30
  const sorted = [...freq.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 30)
    .map(e => parseAnswerSong(e.song));

  similarCache.set(songId, sorted);
  return sorted;
}


function parseAnswerSong(song) {
  const lastVersion = song.versions[song.versions.length - 1];
  return {
    id: song.id,
    songAuthor: song.metadata.songAuthorName,
    songName: song.metadata.songName,
    title: song.name,
    duration: song.metadata.duration,
    bpm: song.metadata.bpm,
    score: song.stats.score,
    coverURL: lastVersion.coverURL,
    previewURL: lastVersion.previewURL,
    downloadURL: lastVersion.downloadURL,
    difficulties: lastVersion.diffs
      .filter(diff => diff.notes > 0)
      .map(diff => {
        return {
          name: diff.difficulty,
          characteristic: diff.characteristic,
          notes: diff.notes,
          notesPerSecond: diff.notes / song.metadata.duration,
        }
      }),
    song
  }
}
