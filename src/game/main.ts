import "./style.css";
import { Game } from "./game/game.ts";
import { loadOrDownloadSong } from "../songs/songLoader.ts";

const audioPlayerElem = document.getElementById("audioPlayer")!;
const hitTimeElem = document.getElementById("hitTime")!;
const timeOffsetElem = document.getElementById("timeOffset")!;
const visibilityElem = document.getElementById("visibility")!;


// @ts-ignore
let timeOffset = +hitTimeElem.value;
// @ts-ignore
let hitTime = +timeOffsetElem.value;
// @ts-ignore
let visibility = + visibilityElem.value;


let game: Game;

async function load() {

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
  game = new Game(songData.difficulties[diffI].notes, songData.lightEvents);

  audioPlayerElem.src = URL.createObjectURL(audio);
  audioPlayerElem.volume = 0.5;
  audioPlayerElem.load();


  window.addEventListener('resize', game.visuals.resize);
  document.body.addEventListener('keydown', keyPressed);
  timeOffsetElem.addEventListener('input', changeTimeOffset);
  hitTimeElem.addEventListener('input', changeHitTime);
  visibilityElem.addEventListener('input', (e: any) => game.visuals.backgroundVisuals.updateVisibility(+e.target.value));


}


function animate() {
  requestAnimationFrame(animate);
  if (game)
    game.update(audioPlayerElem.currentTime + timeOffset);
}

animate();
load();


// handlers

const KEYS = { 's': 0, 'd': 1, 'k': 2, 'l': 3, } as const;

function keyPressed(e: any) {
  if (e.key == " ") {
    if (audioPlayerElem.paused) audioPlayerElem.play();
    else audioPlayerElem.pause();
    e.preventDefault();
    return;
  }

  const keyId = KEYS[e.key];
  if (keyId == undefined) return;
  game.click(keyId);
  e.preventDefault();
}


function changeTimeOffset(e: any) {
  timeOffset = +e.target.value;
  console.log(timeOffset)
}

function changeHitTime(e: any) {
  game.setHitWindow(+e.target.value);
  console.log(+e.target.value)
}




