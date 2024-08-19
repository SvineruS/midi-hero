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

let game: Game;
let songPlayer: SongPlayer2;

async function load() {

    const path = "/src/songs/song.mid";

    const midi = await Midi.fromUrl(path)
    const { instruments, startTime } = parseMidiForGame(midi);
    songPlayer = new SongPlayer2(path, startTime);
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

        if (audioTimeNow != lastAudioTime) {
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


function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener('resize', resize);
document.body.addEventListener('keydown', keyPressed);
document.getElementById('playPause')!.addEventListener('click', playPause);
document.getElementById("timeOffset")!.addEventListener('input', changeTimeOffset);
changeInstElem.addEventListener('change', (e: any) => game.setInstrument(+e.target.value));
