import "./style.css";
import { Game } from "./game/game.ts";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import { StorageUtil } from "../settings/settings.ts";

const audioPlayerElem = document.getElementById("audioPlayer") as HTMLAudioElement;
const hitTimeElem = document.getElementById("hitTime") as HTMLInputElement;
const timeOffsetElem = document.getElementById("timeOffset") as HTMLInputElement;
const visibilityElem = document.getElementById("visibility") as HTMLInputElement;
const volumeElem = document.getElementById("volume") as HTMLInputElement;

const startOverlayElem = document.getElementById("startOverlay") as HTMLDivElement;
const startCoverElem = document.getElementById("startCover") as HTMLImageElement;
const startTitleElem = document.getElementById("startTitle") as HTMLElement;
const startAuthorElem = document.getElementById("startAuthor") as HTMLElement;
const startDiffElem = document.getElementById("startDiff") as HTMLElement;
const startBpmElem = document.getElementById("startBpm") as HTMLElement;
const startDurationElem = document.getElementById("startDuration") as HTMLElement;
const startNpsElem = document.getElementById("startNps") as HTMLElement;

const endOverlayElem = document.getElementById("endOverlay") as HTMLDivElement;
const endScoreElem = document.getElementById("endScore") as HTMLElement;
const endAccuracyElem = document.getElementById("endAccuracy") as HTMLElement;
const endMaxComboElem = document.getElementById("endMaxCombo") as HTMLElement;
const endHitsElem = document.getElementById("endHits") as HTMLElement;
const endFailsElem = document.getElementById("endFails") as HTMLElement;
const endReplayBtn = document.getElementById("endReplay") as HTMLButtonElement;
const endBackBtn = document.getElementById("endBack") as HTMLButtonElement;


let game: Game;
let gameStarted = false;


async function load() {

  const timeOffset = StorageUtil.get("timeOffset") ?? 0;
  const hitTime = StorageUtil.get("hitTime") || 0.075;
  const visibility = StorageUtil.get("visibility") ?? 0.25;
  const audioVolume = StorageUtil.get("audioVolume") ?? 0.5;

  console.log("loaded timeOffset", timeOffset, "hitTime", hitTime, "visibility", visibility)

  hitTimeElem.value = hitTime;
  timeOffsetElem.value = timeOffset;
  visibilityElem.value = visibility;
  volumeElem.value = audioVolume;


  let [songId, diffI] = location.hash.substring(1).split("-")
  if (!songId) {
    console.log("loading default song")
    songId = "9d1b";
    diffI = "3"
    location.hash = `#${songId}-${diffI}`;
  } else {
    console.log("loading song", songId, "difficulty", diffI)
  }

  const { audio, meta, songData } = await loadOrDownloadSong(songId);

  console.log(meta, songData)
  const difficulty = meta.difficulties[+diffI] ?? meta.difficulties[0];
  game = new Game(songData.difficulties[diffI].notes, songData.lightEvents, meta, difficulty);

  audioPlayerElem.src = URL.createObjectURL(audio);
  audioPlayerElem.volume = audioVolume;
  audioPlayerElem.load();


  game.setTimeOffset(timeOffset);
  game.setHitWindow(hitTime);
  game.visuals.backgroundVisuals.updateVisibility(visibility)


  populateStartOverlay();


  window.addEventListener('resize', game.visuals.resize);
  document.body.addEventListener('keydown', keyPressed);
  startOverlayElem.addEventListener('click', startGame);
  endReplayBtn.addEventListener('click', () => location.reload());
  endBackBtn.addEventListener('click', () => {
    window.location.href = '/midi-hero/marketplace.html';
  });
  audioPlayerElem.addEventListener('ended', onSongEnd);


  timeOffsetElem.addEventListener('input', (e: any) => {
    game.setTimeOffset(+e.target.value);
    StorageUtil.set("timeOffset", +e.target.value)
  });
  hitTimeElem.addEventListener('input', (e: any) => {
    game.setHitWindow(+e.target.value)
    StorageUtil.set("hitTime", +e.target.value)
  });
  visibilityElem.addEventListener('input', (e: any) => {
    game.visuals.backgroundVisuals.updateVisibility(+e.target.value)
    StorageUtil.set("visibility", +e.target.value)
  });
  volumeElem.addEventListener('input', (e: any) => {
    audioPlayerElem.volume = +e.target.value;
    StorageUtil.set("audioVolume", +e.target.value);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) audioPlayerElem.pause();
  });

}


function animate() {
  requestAnimationFrame(animate);
  if (!game) return;
  if (document.hidden) return;

  game.update(audioPlayerElem.currentTime);
}

load();
animate();


// overlays

function populateStartOverlay() {
  const { meta, difficulty } = game;
  startCoverElem.src = meta.coverURL;
  startTitleElem.textContent = meta.songName;
  startAuthorElem.textContent = meta.songAuthor;
  const charPrefix = difficulty.characteristic && difficulty.characteristic !== "Standard"
    ? `${difficulty.characteristic} `
    : "";
  startDiffElem.textContent = `${charPrefix}${difficulty.name}`;
  startBpmElem.textContent = `${meta.bpm} BPM`;
  startDurationElem.textContent = formatSeconds(meta.duration);
  startNpsElem.textContent = `${difficulty.notesPerSecond.toFixed(2)} NPS`;
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  startOverlayElem.classList.add("hidden");
  audioPlayerElem.play();
}

function onSongEnd() {
  const stats = game.getStats();
  endScoreElem.textContent = String(stats.score);
  endAccuracyElem.textContent = `${(stats.accuracy * 100).toFixed(1)}%`;
  endMaxComboElem.textContent = String(stats.maxCombo);
  endHitsElem.textContent = String(stats.hits);
  endFailsElem.textContent = String(stats.fails);
  endOverlayElem.classList.remove("hidden");
}

function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}


// handlers

const KEYS = { 'KeyS': 0, 'KeyD': 1, 'KeyK': 2, 'KeyL': 3, } as const;

function keyPressed(e: any) {
  if (e.key == " ") {
    if (!gameStarted) {
      startGame();
    } else if (audioPlayerElem.paused) {
      audioPlayerElem.play();
    } else {
      audioPlayerElem.pause();
    }
    e.preventDefault();
    return;
  }

  if (!gameStarted) return;

  const keyId = KEYS[e.code];
  if (keyId == undefined) return;
  game.click(keyId);
  e.preventDefault();
}
