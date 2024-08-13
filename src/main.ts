import {Game} from "./game.ts";
import { findMininimum, interpolate, lerp, populateSelect } from "./utils.ts";
import {
    camera,
    cubeMaterialFailed,
    cubeMaterialNeutral, cubeMaterialSuccess,
    cubes,
    DISTANCE_FAR, DISTANCE_FINISH, lights,
    LINE_POS,
    renderer,
    scene
} from "./3d/3d.ts";
import {renderBackground } from "./3d/3d_background.ts";

const timeOffsetElem: any = document.getElementById("timeOffset")!;
const changeInstElem: any = document.getElementById("changeInst")!;



const HIT_TIME_UP = 0.09;
const HIT_TIME_DOWN = 0.05;



const game = new Game()
game.loadSong().then(() => {
    populateSelect(changeInstElem, Object.values(game.instruments).map((instr) => [instr.number, instr.name]))

})



async function playPause() {
    if (game.audioTime() === 0) game.play();
    else stop();
}




function update(timeNow: number) {


    lights.forEach((light, i) => {
        light.position.x = Math.sin(timeNow + i*10) * 10;
        light.position.z = Math.cos(timeNow + i*10) * 10;
    });

    game.update(timeNow);


    const timeTop = timeNow + 5
    const timeTooLate = timeNow - HIT_TIME_DOWN;
    const timeBot = timeNow - 0.2


    const notes = game.getCurrentNotes(timeBot, timeTop, changeInstElem.value)

    for (let i = 0; i < 100; i++) {
        const cube = cubes[i];
        const note = notes[i];
        if (!note) {
            cube.position.z = -DISTANCE_FAR;
            continue;
        }

        const notePosZ = lerp(note.startTime, timeNow, timeTop, DISTANCE_FINISH, DISTANCE_FAR);
        const notePosX = LINE_POS[note.note % 4];

        if (note.status == undefined) {
            cube.material = cubeMaterialNeutral;
            if (note.startTime < timeTooLate) {
                note.status = false;
                game.onFail();
            }
        }
        else if (note.status)
            cube.material = cubeMaterialSuccess;
        else if (!note.status)
            cube.material = cubeMaterialFailed;
        else console.warn(note.status)


        cube.position.x = notePosX;
        cube.position.z = -notePosZ;
    }

}
let lastAudioTime = 0;
let timeAfterLastAudioTime = 0;

let prevFrameTime = performance.now();

let audioTimeFixed = 0;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now() / 1000;

    if (game.startTime != 0) {

        const delta = now - prevFrameTime;
        prevFrameTime = now;

        timeAfterLastAudioTime += delta;

        const audioTimeNow = game.audioTime();

        if (audioTimeNow != lastAudioTime) {
            lastAudioTime = audioTimeNow;
            timeAfterLastAudioTime = 0;
        }

        const audioTimeFixedTarget = lastAudioTime + timeAfterLastAudioTime + +timeOffsetElem.value;
        // console.log(timeOffsetElem.value)
        audioTimeFixed = interpolate(audioTimeFixed, audioTimeFixedTarget, 0.2);

        update(audioTimeFixed);

    }
    renderBackground(now);
    renderer.render(scene, camera);
}

animate();


// handlers

const KEYS = {
    's':0,
    'd':1,
    'k':2,
    'l':3,
} as const;


function keyPressed(e: any) {
    console.log(e.key)
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
        game.onFail();
        return;
    }

    const note = findMininimum(candidates, (note) => Math.abs(note.startTime - timeNow));
    if (note.status !== undefined) {
        console.warn("Already hit or miss", note.status)
        game.onFail();
        return;
    }
    note.status = true;
    game.onSuccess();



}

function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener('resize', resize);
document.body.addEventListener('keydown', keyPressed);
document.getElementById('playPause')!.addEventListener('click', playPause);
