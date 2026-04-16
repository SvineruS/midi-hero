import * as THREE from "three";

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`

const fragmentShader = `
varying vec2 vUv;
uniform vec3 iResolution;
uniform float iTime;
uniform float iVisibility;
uniform vec3 colorLeft;
uniform vec3 colorRight;
uniform vec3 colorCenter1;
uniform vec3 colorCenter2;
uniform vec3 colorCenter3;

float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    float res = mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
}

const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);

float fbm(vec2 p) {
    float f = 0.0;
    f += 0.500000 * noise(p + iTime * 0.1);  p = mtx * p * 2.02;
    f += 0.031250 * noise(p);                 p = mtx * p * 2.01;
    f += 0.250000 * noise(p);                 p = mtx * p * 2.03;
    f += 0.125000 * noise(p);                 p = mtx * p * 2.01;
    f += 0.062500 * noise(p);                 p = mtx * p * 2.04;
    f += 0.015625 * noise(p + sin(iTime * 0.1));
    return f / 0.96875;
}

float pattern(in vec2 p) {
    return fbm(p + fbm(p + fbm(p)));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.x;
    vec2 uvN = fragCoord / iResolution.xy;

    // Two noise layers at different scales for organic flow
    float n1 = pattern(uv);
    float n2 = fbm(uv * 1.5 + iTime * 0.03);

    // Dark neon base: deep purple/indigo with noise-driven variation
    vec3 base = mix(
        vec3(0.02, 0.005, 0.06),
        vec3(0.08, 0.02, 0.14),
        n1 * 0.65
    );

    // Spatial regions — smooth gaussian-like falloff per light
    float rL  = smoothstep(1.3, 0.0, length(uv - vec2(0.15, 0.5)));
    float rR  = smoothstep(1.3, 0.0, length(uv - vec2(0.85, 0.5)));
    float rC1 = smoothstep(1.1, 0.0, length(uv - vec2(0.5, 0.12)));
    float rC2 = smoothstep(1.1, 0.0, length(uv - vec2(0.5, 0.5)));
    float rC3 = smoothstep(1.1, 0.0, length(uv - vec2(0.5, 0.88)));

    // Colors flow through the noise texture instead of flat circles
    float flow = n1 * 0.6 + n2 * 0.4;
    rL  *= flow;
    rR  *= flow;
    rC1 *= flow;
    rC2 *= flow * (0.4 + 0.6 * n2);
    rC3 *= flow;

    // Weighted light contribution
    vec3 lights =
        colorLeft    * rL +
        colorRight   * rR +
        colorCenter1 * rC1 +
        colorCenter2 * rC2 +
        colorCenter3 * rC3;

    lights *= iVisibility;

    // Screen blend: saturates gracefully, never clips to white
    vec3 color = 1.0 - (1.0 - base) * (1.0 - lights);

    // Vignette: darken edges for depth
    vec2 vc = uvN - 0.5;
    float vig = 1.0 - dot(vc, vc) * 1.6;
    color *= clamp(vig, 0.0, 1.0);

    fragColor = vec4(color, 1.0);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
`

export const backgroundUniforms = {
    iTime: { value: 0 },
    iVisibility: { value: 0 },
    iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
    colorLeft: { value: new THREE.Vector3(0, 0, 0) },
    colorRight: { value: new THREE.Vector3(0, 0, 0) },
    colorCenter1: { value: new THREE.Vector3(0, 0, 0) },
    colorCenter2: { value: new THREE.Vector3(0, 0, 0) },
    colorCenter3: { value: new THREE.Vector3(0, 0, 0) },
}

const backgroundPlane = new THREE.PlaneGeometry(2, 2)
const backgroundMat = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: backgroundUniforms,
})
backgroundMat.depthWrite = false; // to display in background

export const background = new THREE.Mesh(backgroundPlane, backgroundMat)
