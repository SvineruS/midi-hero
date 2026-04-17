import { searchSongById } from "../songs/bsApi.ts";

export function exportSongIds(songs: any[]): string {
  return JSON.stringify(songs.filter(s => !s._removed).map(s => s.id));
}

export function parseSongIds(text: string): string[] | null {
  try {
    const ids = JSON.parse(text);
    if (Array.isArray(ids) && ids.every(id => typeof id === "string")) return ids;
  } catch {}
  return null;
}

export async function importSongs(
  ids: string[],
  existingIds: Set<string>,
  saveSong: (meta: any) => Promise<void>,
  onProgress: (done: number, total: number) => void,
): Promise<number> {
  const newIds = ids.filter(id => !existingIds.has(id));
  for (let i = 0; i < newIds.length; i++) {
    try {
      const meta = await searchSongById(newIds[i]);
      await saveSong(meta);
    } catch (e) {
      console.warn("Failed to import", newIds[i], e);
    }
    onProgress(i + 1, newIds.length);
  }
  return newIds.length;
}
