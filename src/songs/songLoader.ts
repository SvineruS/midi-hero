import { downloadSong, searchSongById } from "./bsApi.ts";
import type { SongMeta, SongData } from "./types.ts";

const CACHE_NAME = "midihero";
const CACHE_FILES = ["song.ogg", "meta.json", "notes.json"] as const;

// Bump this when the parsing algorithm changes to invalidate all cached notes
const PARSER_VERSION = 2;


export async function loadOrDownloadSong(songId: string) {
  try {
    return await loadSong(songId);
  } catch (e) {
    console.warn(e);
  }

  const songMeta = await searchSongById(songId);
  return await saveSong(songMeta);
}


export async function saveSong(songMeta: SongMeta) {
  const { audio, meta, songData } = await downloadSong(songMeta);

  const cache = await caches.open(CACHE_NAME);

  await cache.put(new Request(`/${meta.id}/song.ogg`), new Response(audio));

  const metaFileBlob = new Blob([JSON.stringify(songMeta)], { type: "application/json" });
  await cache.put(new Request(`/${meta.id}/meta.json`), new Response(metaFileBlob));

  const notesPayload = { ...songData, _hash: meta.hash, _parserVersion: PARSER_VERSION };
  const notesFileBlob = new Blob([JSON.stringify(notesPayload)], { type: "application/json" });
  await cache.put(new Request(`/${meta.id}/notes.json`), new Response(notesFileBlob));

  console.log("Song saved to cache", meta.id, "hash:", meta.hash, "parser:", PARSER_VERSION);
  return { audio, meta, songData };
}


export async function loadSong(songId: string) {
  console.log("Loading song from cache", songId);
  const cache = await caches.open(CACHE_NAME);
  const [song, meta, notes] = await Promise.all(
    CACHE_FILES.map(async file => cache.match(new Request(`/${songId}/${file}`)))
  );

  if (!song || !meta || !notes)
    throw new Error("Song not found in cache");

  const songData = await notes.json();
  const metaData = await meta.json();

  // Validate cache: check parser version and map hash
  if (songData._parserVersion !== PARSER_VERSION) {
    console.warn("Parser version mismatch, re-downloading", songId);
    throw new Error("Cache stale: parser version changed");
  }

  if (metaData.hash && songData._hash && metaData.hash !== songData._hash) {
    console.warn("Map hash mismatch, re-downloading", songId);
    throw new Error("Cache stale: map updated on server");
  }

  return {
    audio: await song.blob(),
    meta: metaData,
    songData,
  };
}

export async function deleteSong(songId: string) {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(
    CACHE_FILES.map(async file => cache.delete(new Request(`/${songId}/${file}`)))
  );
}

export async function getDownloadedSongs() {
  const cache = await caches.open(CACHE_NAME);
  const requests = (await cache.keys()).filter(req => req.url.endsWith("meta.json"));
  const songElements = [];
  for (const request of requests) {
    const response = await cache.match(request);
    const meta = await response.json();
    songElements.push(meta);
  }
  return songElements;
}
