import { Color } from "three";
import {
    cubeMaterialFailed,
    cubeMaterialNeutral, cubeMaterialNow,
    cubeMaterialSuccess,
    cubes,
    DISTANCE_FAR,
    DISTANCE_FINISH, finish, finishLights, funLights,
    LINE_POS
} from "../3d/3d.ts";
import { interpolate, lerp } from "../utils.ts";
import { backgroundUniforms } from "../3d/3d_background.ts";
import { Game } from "./game.ts";


const colorRed = new Color(0xff0000);
const colorGreen = new Color(0x00ff00);



export class GameVisual {
    lightsIntensity = 0;
    backgroundTime = 0;
    // backgroundTimeAdd = 0;

    constructor(
        public game: Game,
    ) {
    }


    update(delta: number) {
        this.backgroundTime += delta
        this.updateCubes();

        this.lightsIntensity = interpolate(this.lightsIntensity, 0.5, 0.01);


        backgroundUniforms.iTime.value = this.backgroundTime;
        backgroundUniforms.iImpulse.value = this.lightsIntensity;
        finishLights.forEach((light) =>
            light.intensity = interpolate(light.intensity, 0, 0.1));
        funLights.forEach((light, i) => {
            light.intensity = this.lightsIntensity * 1000;
            light.position.x = Math.sin(this.game._gameTime + i * 10) * 10;
            light.position.z = Math.cos(this.game._gameTime + i * 10) * 10;
        });


    }


    updateCubes() {
        const notes = this.game.getDisplayNotes();

        for (let i = 0; i < 100; i++) {
            const cube = cubes[i];
            const note = notes[i];
            if (!note) {
                cube.position.z = DISTANCE_FAR;
                continue;
            }

            const notePosZ = lerp(note.startTime, this.game._gameTime, this.game.timeTop, DISTANCE_FINISH, DISTANCE_FAR);
            const notePosX = LINE_POS[note.note];

            if (note.status == undefined) cube.material = cubeMaterialNeutral;
            else if (note.status) cube.material = cubeMaterialSuccess;
            else if (!note.status) cube.material = cubeMaterialFailed;
            else console.warn(note.status)

            if (!note.flashed && note.startTime < this.game._gameTime) {
                note.flashed = true;
                this.onNotePlay()
                console.log("Flashed")
                cube.material = cubeMaterialNow;
            }

            cube.position.x = notePosX;
            cube.position.z = -notePosZ;
        }

    }

    onNotePlay() {
        this.lightsIntensity = Math.min(1, (this.lightsIntensity * 1.1));
        this.backgroundTime += 0.1;
    }

    onHitOrMiss(isHit, line) {
        finishLights[line].intensity = 100;
        finishLights[line].color = isHit ? colorGreen : colorRed;
    }


    setFinishSize(HIT_TIME: number, DISPLAY_TIME_TOP: number) {
        const size = lerp(HIT_TIME, 0, DISPLAY_TIME_TOP, DISTANCE_FINISH, DISTANCE_FAR);
        finish.scale.z = size;
    }
}
