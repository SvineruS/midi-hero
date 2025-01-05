import JSZip from "jszip";
import { parseDifficultyFile } from "./songParser.ts";

export async function searchSongs(query) {
  console.log("Searching for songs", query);
  const response = await fetch(`https://api.beatsaver.com/search/v1/0?leaderboard=All&q=${query}&sortOrder=Latest`);
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

  const standartMode = info._difficultyBeatmapSets.find(mode => mode._beatmapCharacteristicName == "Standard");
  for (const diff of standartMode._difficultyBeatmaps) {
    const diffFile = await zip.file(diff._beatmapFilename).async("text");
    const { notes, lightEvents } = parseDifficultyFile(diffFile, startBpm);
    if (!notes.length) continue;
    difficulties.push({
      difficulty: diff._difficulty,
      rank: diff._difficultyRank,
      notes,
    })
    allLightEvents.push(lightEvents);
  }

  const longestLightEvents = allLightEvents.reduce((a, b) => a.length > b.length ? a : b, []);

  const songData = {difficulties, lightEvents: longestLightEvents}
  const songFile = await zip.file(songPath).async("blob");

  return { audio: songFile, meta: songMeta, songData }
}


function parseAnswerSong(song) {
  const lastVersion = song.versions[song.versions.length - 1];
  return {
    id: song.id,
    songAuthor: song.metadata.songAuthorName,
    songName: song.metadata.songName,
    title: song.name,
    duration: song.metadata.duration,
    score: song.stats.score,
    coverURL: song.coverURL,
    previewURL: lastVersion.previewURL,
    downloadURL: lastVersion.downloadURL,
    difficulties: lastVersion.diffs.map(diff => {
      return {
        name: diff.difficulty,
        characteristic: diff.characteristic,
        notes: diff.notes,
      }
    }),
    song
  }
}
