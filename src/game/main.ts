import "./style.css";
import { Game } from "./game/game.ts";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import { StorageUtil } from "../settings/settings.ts";

const audioPlayerElem = document.getElementById("audioPlayer") as HTMLAudioElement;
const hitTimeElem = document.getElementById("hitTime") as HTMLInputElement;
const timeOffsetElem = document.getElementById("timeOffset") as HTMLInputElement;
const visibilityElem = document.getElementById("visibility") as HTMLInputElement;


let game: Game;


async function load() {

  const timeOffset = StorageUtil.get("timeOffset") || 0;
  const hitTime = StorageUtil.get("hitTime") || 0.05;
  const visibility = StorageUtil.get("visibility") || 0.25;
  const audioVolume = StorageUtil.get("audioVolume") || 0.5;

  console.log("loaded timeOffset", timeOffset, "hitTime", hitTime, "visibility", visibility)

  hitTimeElem.value = hitTime;
  timeOffsetElem.value = timeOffset;
  visibilityElem.value = visibility;


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
  audioPlayerElem.volume = audioVolume;
  audioPlayerElem.load();


  game.setTimeOffset(timeOffset);
  game.setHitWindow(hitTime);
  game.visuals.backgroundVisuals.updateVisibility(visibility)



  window.addEventListener('resize', game.visuals.resize);
  document.body.addEventListener('keydown', keyPressed);


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


}


function animate() {
  requestAnimationFrame(animate);
  if (game)
    game.update(audioPlayerElem.currentTime);
}

window.onload = () => {
  console.log("loaded")
  load();
  animate();
}


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

