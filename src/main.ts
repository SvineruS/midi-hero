import "./style.css";
import { Game } from "./game.ts";
import { findMininimum, interpolate, lerp, populateSelect } from "./utils.ts";
import {
    camera,
    cubeMaterialFailed,
    cubeMaterialNeutral, cubeMaterialSuccess,
    cubes,
    DISTANCE_FAR, DISTANCE_FINISH, finishLights, funLights,
    LINE_POS,
    renderer,
    scene
} from "./3d/3d.ts";
import { backgroundUniforms } from "./3d/3d_background.ts";
import { Color } from "three";

const changeInstElem: any = document.getElementById("changeInst")!;


const HIT_TIME_UP = 0.09;
const HIT_TIME_DOWN = 0.05;


let lightsIntensity = 0;
let timeOffset = -0.1;


const game = new Game()
game.loadSong().then(() => {
    populateSelect(changeInstElem, Object.values(game.instruments).map((instr) => [instr.number, instr.name]))

})


async function playPause() {
    if (game.audioTime() === 0) game.play();
    else stop();
}


function update(timeNow: number) {


    game.update(timeNow);


    const timeTop = timeNow + 5
    const timeTooLate = timeNow - HIT_TIME_DOWN;
    const timeBot = timeNow - 0.2


    const notes = game.getCurrentNotes(timeBot, timeTop, changeInstElem.value)

    for (let i = 0; i < 100; i++) {
        const cube = cubes[i];
        const note = notes[i];
        if (!note) {
            cube.position.z = DISTANCE_FAR;
            continue;
        }

        const noteLine = note.note % 4;

        const notePosZ = lerp(note.startTime, timeNow, timeTop, DISTANCE_FINISH, DISTANCE_FAR);
        const notePosX = LINE_POS[noteLine];

        if (note.status == undefined) {
            cube.material = cubeMaterialNeutral;
            if (note.startTime < timeTooLate) {
                note.status = false;
                console.warn("Missed")
                onHitOrMiss(false, noteLine);
            }
        } else if (note.status) cube.material = cubeMaterialSuccess;
        else if (!note.status) cube.material = cubeMaterialFailed;
        else console.warn(note.status)

        if (!note.flashed && note.startTime < timeNow) {
            note.flashed = true;
            lightsIntensity = Math.min(1, (lightsIntensity * 1.1));
            backgroundTime += 0.1;
            console.log("Flashed")
        }

        cube.position.x = notePosX;
        cube.position.z = -notePosZ;
    }


    lightsIntensity = interpolate(lightsIntensity, 0.5, 0.01);
    backgroundUniforms.iTime.value = backgroundTime;
    backgroundUniforms.iImpulse.value = lightsIntensity;
    finishLights.forEach((light) =>
        light.intensity = interpolate(light.intensity, 0, 0.1));
    funLights.forEach((light, i) => {
        light.intensity = lightsIntensity * 1000;
        light.position.x = Math.sin(timeNow + i * 10) * 10;
        light.position.z = Math.cos(timeNow + i * 10) * 10;
    });


}


const colorRed = new Color(0xff0000);
const colorGreen = new Color(0x00ff00);

function onHitOrMiss(isHit, line) {
    finishLights[line].intensity = 100;
    finishLights[line].color = isHit ? colorGreen : colorRed;
    if (isHit) game.onSuccess()
    else game.onFail()
}


let lastAudioTime = 0;
let timeAfterLastAudioTime = 0;
let prevFrameTime = performance.now();
let audioTimeFixed = 0;
let backgroundTime = 0;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now() / 1000;

    if (game.startTime != 0) {

        const delta = now - prevFrameTime;
        prevFrameTime = now;

        timeAfterLastAudioTime += delta;
        backgroundTime += delta;

        const audioTimeNow = game.audioTime();

        if (audioTimeNow != lastAudioTime) {
            lastAudioTime = audioTimeNow;
            timeAfterLastAudioTime = 0;
        }

        const audioTimeFixedTarget = lastAudioTime + timeAfterLastAudioTime + +timeOffset;
        // console.log(timeOffsetElem.value)
        audioTimeFixed = interpolate(audioTimeFixed, audioTimeFixedTarget, 0.2);

        update(audioTimeFixed);

    }
    renderer.render(scene, camera);
}

animate();


// handlers

const KEYS = {
    's': 0,
    'd': 1,
    'k': 2,
    'l': 3,
} as const;


function keyPressed(e: any) {
    // @ts-ignore
    const keyId = KEYS[e.key];
    if (keyId == undefined) return;

    const timeNow = game.graphicTime();
    const timeTop = timeNow + HIT_TIME_UP;
    const timeBot = timeNow - HIT_TIME_DOWN;


    const notes = game.getCurrentNotes(timeBot, timeTop, changeInstElem.value)
    const candidates = notes.filter((note) => keyId == note.note % 4);
    if (candidates.length == 0) {
        console.warn("Mised: no candidates")
        onHitOrMiss(false, keyId);
        return;
    }

    const note = findMininimum(candidates, (note) => Math.abs(note.startTime - timeNow));
    if (note.status !== undefined) {
        console.warn("Already hit or miss", note.status)
        onHitOrMiss(false, keyId);
        return;
    }
    note.status = true;
    onHitOrMiss(true, keyId);


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

