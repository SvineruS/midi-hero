import { Color } from "three";
import {
  camera,
  cubeMaterial,
  cubes,
  effectLights, effectLightsNamed,
  finish,
  finishLights,
  funLights, keyHintTexts,
  LINE_POS,
  POSITION_FINISH,
  POSITION_START,
  renderer,
  scene
} from "../3d/3d.ts";
import { interpolate, lerp } from "../utils.ts";
import { backgroundUniforms } from "../3d/3d_background.ts";
import { Game } from "./game.ts";
import { LightEvent, NoteEvent } from "../../songs/types.ts";
import * as THREE from "three";


export class GameVisuals {
  lightsVisuals: LightsVisuals;
  cubesVisuals: CubesVisuals;
  backgroundVisuals: BackgroundVisuals;
  finishVisuals: FinishVisuals;



  constructor(public game: Game, lightEvents: LightEvent[]) {
    this.cubesVisuals = new CubesVisuals(this);
    this.backgroundVisuals = new BackgroundVisuals(this);
    this.finishVisuals = new FinishVisuals(this);
    this.lightsVisuals = new LightsVisuals(this, lightEvents);

  }


  update(delta: number) {
    this.cubesVisuals.update();
    this.finishVisuals.update();
    this.lightsVisuals.update();
    this.backgroundVisuals.update(delta);

    renderer.render(scene, camera);
  }

  timeNow() {
    return this.game.timeNow;
  }

  resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }


}


class CubesVisuals {
  constructor(public visuals: GameVisuals,) {
  }

  update() {
    const game = this.visuals.game
    const notes = game.notes.getDisplayNotes();

    for (let i = 0; i < 100; i++) {

      const cube = cubes[i];
      const note = notes[i];

      if (!note) {
        cube.position.z = POSITION_START;
        continue;
      }

      cube.position.z = -lerp(note.time, game.timeNow, game.notes.timeTop, POSITION_FINISH, POSITION_START);
      cube.position.x = LINE_POS[note.note];
      cube.material = this._getCubeMaterial(note);
    }

  }

  _getCubeMaterial(note: NoteEvent) {
    if (note.status == undefined) {
      // if (i + this.visuals.game.notes._bottomNoteIndex < this.visuals.game.notes._bottomClickableNoteIndex) return cubeMaterial.NOW;
      return cubeMaterial.NEUTRAL;
    }
    if (note.status) return cubeMaterial.SUCCESS;
    if (!note.status) return cubeMaterial.FAILED;

    throw new Error("Invalid note status");
  }


}


class LightsVisuals {


  COLORS = [
    new Color(0x010000),
    new Color(0x50e2e3),
    new Color(0xf164ec),
    new Color(0xffffff),
  ]

  INTENSITY = 500;


  private lightEventIndex = 0;

  private lightsTarget: number[];


  constructor(public visuals: GameVisuals, public lightEvents: LightEvent[]) {
    this.lightsTarget = effectLights.map(() => 0);
  }


  update() {
    effectLights.forEach((light, i) => {
      light.intensity = interpolate(light.intensity, this.lightsTarget[i], 0.2);
    });

    this.setBackgroundColor(backgroundUniforms.colorLeft, effectLightsNamed.left);
    this.setBackgroundColor(backgroundUniforms.colorRight, effectLightsNamed.right);
    this.setBackgroundColor(backgroundUniforms.colorCenter1, effectLightsNamed.center1);
    this.setBackgroundColor(backgroundUniforms.colorCenter2, effectLightsNamed.center2);
    this.setBackgroundColor(backgroundUniforms.colorCenter3, effectLightsNamed.center3);


    // effectLightsN.forEach((light, i) => {
    //   light.material = new THREE.MeshBasicMaterial({color: effectLights[i].color});
    // });


    const nextLightEffect = this.lightEvents[this.lightEventIndex];
    if (!nextLightEffect) return;
    const timeBeforeEffect = nextLightEffect.time - this.visuals.timeNow();

    if (timeBeforeEffect <= 0) {
      this.lightEventIndex++;
      this.lightEffect(nextLightEffect);
    }

  }


  lightEffect(le: LightEvent) {
    // console.log("Light effect", le);
    const lightGO = effectLights[le.lightIndex];
    lightGO.color = this.COLORS[le.colorI];

    if (le.modeI == 1) lightGO.intensity = this.INTENSITY;
    else if (le.modeI == 2 || le.modeI == 3) lightGO.intensity = this.INTENSITY*2;

    if (le.modeI == 3) this.lightsTarget[le.lightIndex] = 0;
    else this.lightsTarget[le.lightIndex] = this.INTENSITY;

  }

  setBackgroundColor(uniformVar, light3d) {
    const int = light3d.intensity / this.INTENSITY;
    uniformVar.value.set(light3d.color.r * int, light3d.color.g * int, light3d.color.b * int);
  }

}


class FinishVisuals {
  COLOR_RED = new Color(0xff0000);
  COLOR_GREEN = new Color(0x00ff00);


  constructor(public visuals: GameVisuals,) {
  }

  update() {
    finishLights.forEach((light) =>
      light.intensity = interpolate(light.intensity, 0, 0.1));
  }

  onHitOrMiss(isHit: boolean, line: number) {
    finishLights[line].intensity = 100;
    finishLights[line].color = isHit ? this.COLOR_GREEN : this.COLOR_RED;
    // keyHintTexts[line].material = isHit ? new THREE.MeshBasicMaterial({ color: 0x00ff00 }) : new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.visuals.backgroundVisuals.onNotePlay()
  }

  setFinishSize(HIT_TIME: number, DISPLAY_TIME_TOP: number) {
    const size = lerp(HIT_TIME, 0, DISPLAY_TIME_TOP, POSITION_FINISH, POSITION_START);
    finish.scale.z = size;
  }

}


class BackgroundVisuals {
  lightsIntensity = 0;
  backgroundTime = 0;

  constructor(public visuals: GameVisuals,) {
  }

  update(delta: number) {
    const timeNow = this.visuals.timeNow();

    this.backgroundTime += delta
    this.lightsIntensity = interpolate(this.lightsIntensity, 0.5, 0.01);
    backgroundUniforms.iTime.value = this.backgroundTime;
    backgroundUniforms.iImpulse.value = this.lightsIntensity;


    funLights.forEach((light, i) => {
      light.intensity = this.lightsIntensity * 1000;
      light.position.x = Math.sin(timeNow + i * 10) * 10;
      light.position.z = Math.cos(timeNow + i * 10) * 10;
    });

  }

  onNotePlay() {
    this.lightsIntensity = Math.min(1, (this.lightsIntensity * 1.1));
    this.backgroundTime += 0.1;
  }
}

