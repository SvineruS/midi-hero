import * as THREE from "three";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// @ts-ignore
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { background } from "./3d_background.ts";
import { lerp } from "../utils.ts";


export const POSITION_START = 100;
export const POSITION_FINISH = 0;

export const LINE_POS = [-1.8, -0.6, 0.6, 1.8,]


///// SCENE


export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xfeaafe, 0.003);


export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


export const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 600);
camera.position.set(0, 5, 12)
camera.rotation.x = Math.PI * -0.1;

// fun lights

const funLight = (color, z) => {
  const light = new THREE.PointLight(color, 100, 500);
  light.position.set(0, 10*z, -10 * z)
  scene.add(light);
  return light;
}
export const funLights = [funLight(0xee22ee, 2), funLight(0xee44ee, 5), funLight(0xee66ee, 7), funLight(0xee88ee, 9),]


// finish lights


const finishLight = (line) => {
  const light = new THREE.PointLight(0x0000000, 0, 50);
  light.position.set(LINE_POS[line], 1, POSITION_FINISH + 0.5);
  scene.add(light);
  return light
}
export const finishLights = [finishLight(0), finishLight(1), finishLight(2), finishLight(3)];


// effect lights


const addEffectLight = (x, y, z) => {
  const light = new THREE.PointLight(0x0000000, 0, 5000);
  light.position.set(
    lerp(x, -0.5, 0.5, LINE_POS[1], LINE_POS[2]),
    (y) * 3,
    -10 * z
  );
  scene.add(light);
  return light;
}

export const effectLightsNamed = {
  center1: addEffectLight(0, 5, 1),
  center2: addEffectLight(0, 5, 3),
  left: addEffectLight(5, 1, 3),
  right: addEffectLight(-5, 1, 3),
  center3: addEffectLight(0, 5, 5),
  hz1: addEffectLight(-1, 0, 0),
  hz2: addEffectLight(0, 0, 0),
  hz3: addEffectLight(1, 0, 0),
}

export const effectLights = [effectLightsNamed.center1, effectLightsNamed.center2, effectLightsNamed.left, effectLightsNamed.right, effectLightsNamed.center3, effectLightsNamed.hz1, effectLightsNamed.hz2, effectLightsNamed.hz3];


///// OBJECTS

const floorGeometry = new THREE.PlaneGeometry(5, 1000);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x050510 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);


const finishGeometry = new THREE.BoxGeometry(5, 1, 0.1);
const finishMaterial = new THREE.MeshStandardMaterial({
  color: 0xffff11,
  emissive: 0xffff11,
  emissiveIntensity: 0.4,
});
export const finish = new THREE.Mesh(finishGeometry, finishMaterial);
finish.position.set(0, -0.4, -POSITION_FINISH);
scene.add(finish);


const trackGeometry = new THREE.BoxGeometry(1, 0.1, 1000);
const trackMaterial = new THREE.MeshStandardMaterial({ color: 0x0a0a18 });
const addTrack = (line: number) => {
  const track1 = new THREE.Mesh(trackGeometry, trackMaterial);
  track1.position.x = LINE_POS[line];
  scene.add(track1);
};
for (let i = 0; i < 4; i++)
  addTrack(i);


// glowing lane edge strips (alternating cyan/magenta)
const LANE_EDGE_X = [-2.3, -1.2, 0, 1.2, 2.3];
const LANE_EDGE_COLORS = [0x50e2e3, 0xf164ec, 0x50e2e3, 0xf164ec, 0x50e2e3];
const laneEdgeGeometry = new THREE.BoxGeometry(0.04, 0.02, 1000);
LANE_EDGE_X.forEach((x, i) => {
  const material = new THREE.MeshStandardMaterial({
    color: LANE_EDGE_COLORS[i],
    emissive: LANE_EDGE_COLORS[i],
    emissiveIntensity: 1.7,
  });
  const strip = new THREE.Mesh(laneEdgeGeometry, material);
  strip.position.set(x, 0.06, 0);
  scene.add(strip);
});


export const cubes: THREE.Mesh<any>[] = [];

export const cubeMaterial = {
  NEUTRAL: new THREE.MeshStandardMaterial({
    color: 0x8890b0,
    emissive: 0x3355ff,
    emissiveIntensity: 0.3,
  }),
  SUCCESS: new THREE.MeshStandardMaterial({
    color: 0x2a6030,
    emissive: 0x22ff55,
    emissiveIntensity: 0.9,
  }),
  FAILED: new THREE.MeshStandardMaterial({
    color: 0x903030,
    emissive: 0xff1133,
    emissiveIntensity: 1.6,
  }),
}

const cubeGeometry = new THREE.BoxGeometry(1, 0.6, 1);
const addCube = () => {
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial.NEUTRAL);
  cube.position.z = POSITION_START;
  cubes.push(cube);
  scene.add(cube);
}
for (let i = 0; i < 100; i++)
  addCube()


const loader = new FontLoader();
const fontUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json';

const font: Font = await new Promise((resolve, reject) => {
  loader.load(fontUrl, resolve, undefined, reject);
});


export const createText = (message: string, size: number = 0.5) => {
  const shapes = font.generateShapes(message, size);
  const geometry = new THREE.ShapeGeometry(shapes);
  geometry.computeBoundingBox();
  const xMid = -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
  geometry.translate(xMid, 0, 0);

  return geometry;
}

const textMatWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });

export const text1 = new THREE.Mesh(createText('   Score: 0\n   Combo: 0\n   Hits: 0\n   Fails: 0'), textMatWhite);
text1.position.set(-5, 2, -15);
scene.add(text1);


function createKeyHintsText(line, message) {
  const text = new THREE.Mesh(createText(message, 0.3), textMatWhite);
  text.position.set(LINE_POS[line], 0.1, 4);
  text.rotation.x = -Math.PI / 2;
  scene.add(text);
  return text;
}

export const keyHintTexts = [
  createKeyHintsText(0, 'S'),
  createKeyHintsText(1, 'D'),
  createKeyHintsText(2, 'K'),
  createKeyHintsText(3, 'L'),
]


scene.add(background)
