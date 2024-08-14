import "./style.css";
import { Game } from "./game/game.ts";
import { interpolate, populateSelect } from "./utils.ts";
import { camera, renderer, scene } from "./3d/3d.ts";
import "./song/songParser.ts";
import { Midi } from "@tonejs/midi";
import { parseMidiForGame } from "./song/songParser.ts";
import { SongPlayer } from "./song/songPlayer.ts";

const changeInstElem: any = document.getElementById("changeInst")!;


let timeOffset = -0.1;

let game: Game;
let songPlayer: SongPlayer;

async function load() {

    const midi = await Midi.fromUrl("/src/song.mid")
    const instruments = parseMidiForGame(midi);
    songPlayer = new SongPlayer(midi);
    game = new Game(instruments);

    await songPlayer.load();

    populateSelect(changeInstElem, instruments.map((instr, i) => [i, instr.name]))
}
load();

async function playPause() {
    if (game == undefined) await load();
    if (songPlayer.startTime === 0) songPlayer.play();
    else songPlayer.stop();
}




function update(timeNow: number, delta: number) {


    game.update(timeNow);
    songPlayer.loadNextChunk(timeNow);
    game.visuals.update(delta)


}


let lastAudioTime = 0;
let timeAfterLastAudioTime = 0;
let prevFrameTime = performance.now();
let audioTimeFixed = 0;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now() / 1000;

    if (songPlayer?.startTime > 0) {

        const delta = now - prevFrameTime;
        prevFrameTime = now;

        timeAfterLastAudioTime += delta;

        const audioTimeNow = songPlayer.audioTime();

        if (audioTimeNow != lastAudioTime) {
            lastAudioTime = audioTimeNow;
            timeAfterLastAudioTime = 0;
        }

        const audioTimeFixedTarget = lastAudioTime + timeAfterLastAudioTime + +timeOffset;
        // console.log(timeOffsetElem.value)
        audioTimeFixed = interpolate(audioTimeFixed, audioTimeFixedTarget, 0.2);

        update(audioTimeFixed, delta);

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
