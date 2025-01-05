import { downloadSong, searchSongById } from "./bsApi.ts";

const CACHE_NAME = "midihero";


export async function loadOrDownloadSong(songId: string) {
  try {
    return await loadSong(songId)
  } catch (e) {
    console.warn(e);
  }

  const songMeta = await searchSongById(songId);
  return await saveSong(songMeta);
}





async function saveSong(songMeta) {
  const {audio, meta, songData} = await downloadSong(songMeta);

  const cache = await caches.open(CACHE_NAME);

  await cache.put(new Request(`/${meta.id}/song.ogg`), new Response(audio))

  const metaFileBlob = new Blob([JSON.stringify(songData)], { type: "application/json" });
  await cache.put(new Request(`/${meta.id}/meta.json`), new Response(metaFileBlob))

  const notesFileBlob = new Blob([JSON.stringify(songData)], { type: "application/json" });
  await cache.put(new Request(`/${meta.id}/notes.json`), new Response(notesFileBlob))

  return {audio, meta, songData}

}


export async function loadSong(songId) {
  console.log("Loading song from cache", songId);
  const cache = await caches.open(CACHE_NAME);
  const [song, meta, notes] = await Promise.all(
    ["song.ogg", "meta.json", "notes.json"]
    .map(async file => cache.match(new Request(`/${songId}/${file}`)))
  )

  if (!song || !meta || !notes)
    throw new Error("Song not found in cache");


  return {
    audio: await song.blob(),
    meta: await meta.json(),
    songData: await notes.json(),
  }
}

// async function getDownloadedSongs() {
//   const cache = await caches.open(CACHE_NAME);
//   const requests = (await cache.keys()).filter(req => req.url.endsWith("meta.json"));
//   const songElements = [];
//   for (const request of requests) {
//     const response = await cache.match(request);
//     const meta = await response.json();
//     songElements.push(meta);
//   }
//   return songElements;
// }

