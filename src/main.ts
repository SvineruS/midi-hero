import "./style.css";
import { Game } from "./game/game.ts";
import { interpolate, populateSelect } from "./utils.ts";
import { camera, renderer, scene } from "./3d/3d.ts";
import "./song/songParser.ts";
import { Midi } from "@tonejs/midi";
import { parseMidiForGame } from "./song/songParser.ts";


import { SongPlayer2 } from "./song/player-timidity/songPlayer2.ts";

const changeInstElem: any = document.getElementById("changeInst")!;


// @ts-ignore
let timeOffset = +document.getElementById("timeOffset")!.value;
// @ts-ignore
let hitTime = +document.getElementById("hitTime")!.value;


let game: Game;
let songPlayer: SongPlayer2;

async function load() {

    const songPath = "/midi-hero/songs/song.mid";
    const timidityPath = "/midi-hero/timidity";

    const midi = await Midi.fromUrl(songPath)
    const { instruments, startTime } = parseMidiForGame(midi);
    songPlayer = new SongPlayer2(songPath, startTime, timidityPath);
    game = new Game(instruments);

    await songPlayer.load();

    populateSelect(changeInstElem, instruments.map((instr, i) => [i, instr.name]))
}
load();

async function playPause() {
    if (game == undefined) await load();
    if (!songPlayer.isPlaying()) songPlayer.play();
    else songPlayer.stop();
}




function update(timeNow: number, delta: number) {
    game.update(timeNow);
    game.visuals.update(delta)
}


let lastAudioTime = 0;
let timeAfterLastAudioTime = 0;
let prevFrameTime = performance.now();
let audioTimeAdjusted = 0;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now() / 1000;

    if (songPlayer?.isPlaying()) {

        const delta = now - prevFrameTime;
        prevFrameTime = now;

        timeAfterLastAudioTime += delta;

        const audioTimeNow = songPlayer.audioTime();
        console.log(audioTimeNow)

        console.log(audioTimeNow, songPlayer.rawAudioTime())
        if (audioTimeNow != lastAudioTime && songPlayer.rawAudioTime() != 0) {  // rawAudioTime() == 0 is case when song is end, but we don't want to reset time
            lastAudioTime = audioTimeNow;
            timeAfterLastAudioTime = 0;
        }

        const audioTimeFixedTarget = lastAudioTime + timeAfterLastAudioTime;
        // console.log(timeOffsetElem.value)
        audioTimeAdjusted = interpolate(audioTimeAdjusted, audioTimeFixedTarget, 0.5);

        update(audioTimeAdjusted + +timeOffset, delta);

    }
    renderer.render(scene, camera);
}

animate();


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
    game.setHitTime(+e.target.value);
    console.log(+e.target.value)
}


function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener('resize', resize);
document.body.addEventListener('keydown', keyPressed);
document.getElementById('playPause')!.addEventListener('click', playPause);
document.getElementById("timeOffset")!.addEventListener('input', changeTimeOffset);
document.getElementById("hitTime")!.addEventListener('input', changeHitTime);
changeInstElem.addEventListener('change', (e: any) => game.setInstrument(+e.target.value));
