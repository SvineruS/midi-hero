import "./style.css";
import { Game } from "./game/game.ts";
import { loadOrDownloadSong } from "./song/songLoader.ts";

const audioPlayerElem: any = document.getElementById("audioPlayer")!;

// @ts-ignore
let timeOffset = +document.getElementById("timeOffset")!.value;
// @ts-ignore
let hitTime = +document.getElementById("hitTime")!.value;


let game: Game;

async function load() {

  let [songId, diffI] = location.hash.substring(1).split("-")
  if (!songId) {
    console.log("loading default song")
    songId = "9d1b"; diffI = "3"
    location.hash = `#${songId}-${diffI}`;
  } else {
    console.log("loading song", songId, "difficulty", diffI)
  }

  const { audio, meta, songData } = await loadOrDownloadSong(songId);

  console.log(meta, songData)
  game = new Game(songData.difficulties[diffI].notes, songData.lightEvents);

  audioPlayerElem.src = URL.createObjectURL(audio);
  audioPlayerElem.volume = 0.1;
  audioPlayerElem.load();


  window.addEventListener('resize', game.visuals.resize);
  document.body.addEventListener('keydown', keyPressed);
  document.getElementById("timeOffset")!.addEventListener('input', changeTimeOffset);
  document.getElementById("hitTime")!.addEventListener('input', changeHitTime);


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
  // @ts-ignore
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




