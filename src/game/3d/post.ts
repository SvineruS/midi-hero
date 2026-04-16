import { HalfFloatType, Vector2, WebGLRenderTarget } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { camera, renderer, scene } from "./3d.ts";


const BLOOM_STRENGTH = 0.2;
const BLOOM_RADIUS = 0.1;
const BLOOM_THRESHOLD = 1.5;
const MSAA_SAMPLES = 4;


const pixelRatio = renderer.getPixelRatio();
const renderTarget = new WebGLRenderTarget(
  window.innerWidth * pixelRatio,
  window.innerHeight * pixelRatio,
  { samples: MSAA_SAMPLES, type: HalfFloatType },
);

const size = new Vector2(window.innerWidth, window.innerHeight);
const bloomPass = new UnrealBloomPass(size, BLOOM_STRENGTH, BLOOM_RADIUS, BLOOM_THRESHOLD);

export const composer = new EffectComposer(renderer, renderTarget);
composer.setPixelRatio(pixelRatio);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(bloomPass);
composer.addPass(new OutputPass());
