import * as THREE from "three";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { background} from "./3d_background.ts";


export const DISTANCE_FAR = 200;
export const DISTANCE_FINISH = 0;

export const LINE_POS = [    -1.8,    -0.6,    0.6,    1.8,]


export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0580ae, 0.003);
// scene.background = new THREE.Color(0x1111121);


export const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


export const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.z = 30  ;
camera.position.y = 3;
camera.rotation.x = Math.PI * -0.002




const light = new THREE.AmbientLight(0x404040, 10); // soft white light
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xefeeee, 1.1);
scene.add(directionalLight);


export const lights: THREE.PointLight[] = [];
const addLight = (color, z) => {
    const light = new THREE.PointLight(color, 500, 100);
    light.position.y = 10;
    light.position.z = -10 * z;

    scene.add(light);
    lights.push(light);
}
addLight(0xeeeeee, 2)
addLight(0x00ee00, 5)
addLight(0x0000ee, 7)
addLight(0xee0000, 9)

const farLight = new THREE.PointLight(0xeeeeee, 100000000, 700);
farLight.position.z = -900;
farLight.position.y = 10;
scene.add(farLight)






const floorGeometry = new THREE.PlaneGeometry(5, 1000);
const floorMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);


const finishGeometry = new THREE.BoxGeometry(5, 1, 0.1);
const finishMaterial = new THREE.MeshStandardMaterial({color: 0xee11111});
const finish = new THREE.Mesh(finishGeometry, finishMaterial);
finish.position.z = -DISTANCE_FINISH;
finish.position.y = -0.4;
scene.add(finish);


const trackGeometry = new THREE.BoxGeometry(1, 0.1, 1000);
const trackMaterial = new THREE.MeshStandardMaterial({color: 0x111111});
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

export const cubeMaterialSuccess = new THREE.MeshStandardMaterial({color: 0x22ee22});
export const cubeMaterialNeutral = new THREE.MeshStandardMaterial({color: 0xeeeeee});
export const cubeMaterialFailed = new THREE.MeshStandardMaterial({color: 0xee2222});

const cubeGeometry = new THREE.BoxGeometry(1, 0.7, 1);
const addCube = () => {
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterialNeutral);
    cube.position.z = DISTANCE_FAR;
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
    color: 0xeeeeee,
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
text1.position.z = -40;
text1.position.y = 10;
text1.position.x = -12;
scene.add(text1);




scene.add(background)
