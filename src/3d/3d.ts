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
// scene.background = new THREE.Color(0x1111121);


export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


export const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 600);
camera.position.set(0, 5, 12)
camera.rotation.x = Math.PI * -0.1;


//// LIGHTS

// global lights

const light = new THREE.AmbientLight(0x404040, 1); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xefeeee, 1.1);
scene.add(directionalLight);

// const farLight = new THREE.PointLight(0xeeeeee, 100000, 500);
// farLight.position.set(0, 10, -300);
// scene.add(farLight)


// fun lights

export const funLights: THREE.PointLight[] = [];
const addFunLight = (color, z) => {
  const light = new THREE.PointLight(color, 100, 500);
  light.position.set(0, 10, -10 * z)
  scene.add(light);
  funLights.push(light);
}
addFunLight(0xee22ee, 2)
addFunLight(0xee44ee, 5)
addFunLight(0xee66ee, 7)
addFunLight(0xee88ee, 9)


// finish lights

export const finishLights: THREE.PointLight[] = [];
const addFinishLight = (x) => {
  const light = new THREE.PointLight(0x0000000, 0, 100);
  light.position.set(x, 1, -POSITION_FINISH);
  scene.add(light);
  finishLights.push(light);
}

addFinishLight(LINE_POS[0])
addFinishLight(LINE_POS[1])
addFinishLight(LINE_POS[2])
addFinishLight(LINE_POS[3])


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
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);


const finishGeometry = new THREE.BoxGeometry(5, 1, 0.1);
const finishMaterial = new THREE.MeshStandardMaterial({ color: 0xee11111 });
export const finish = new THREE.Mesh(finishGeometry, finishMaterial);
finish.position.set(0, -0.4, -POSITION_FINISH);
scene.add(finish);


const trackGeometry = new THREE.BoxGeometry(1, 0.1, 1000);
const trackMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
const addTrack = (x: number) => {
  const track1 = new THREE.Mesh(trackGeometry, trackMaterial);
  track1.position.x = x
  scene.add(track1);
};
addTrack(LINE_POS[0]);
addTrack(LINE_POS[1]);
addTrack(LINE_POS[2]);
addTrack(LINE_POS[3]);


export const cubes: THREE.Mesh<any>[] = [];

export const cubeMaterial = {
  NEUTRAL: new THREE.MeshStandardMaterial({ color: 0xeeeeee }),
  SUCCESS: new THREE.MeshStandardMaterial({ color: 0x22ee22 }),
  FAILED: new THREE.MeshStandardMaterial({ color: 0xee2222 }),
  NOW: new THREE.MeshStandardMaterial({ color: 0x22eeee, emissiveIntensity: 100 }),
}

const cubeGeometry = new THREE.BoxGeometry(1, 0.6, 1);
const addCube = () => {
  const cube = new THREE.Mesh(cubeGeometry, new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
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


const matLite = new THREE.MeshBasicMaterial({
  color: 0x111111,
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide
});

export const createText = (message: string) => {
  const shapes = font.generateShapes(message, 0.5);
  const geometry = new THREE.ShapeGeometry(shapes);
  geometry.computeBoundingBox();
  const xMid = -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
  geometry.translate(xMid, 0, 0);

  return geometry;
}

export const text1 = new THREE.Mesh(createText('   Score: 0\n   Combo: 0\n   Hits: 0\n   Fails: 0'), matLite);
text1.position.z = -15;
text1.position.y = 2;
text1.position.x = -5;
scene.add(text1);


scene.add(background)
