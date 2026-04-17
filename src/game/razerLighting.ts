// Razer Chroma REST SDK integration.
// Requires Razer Synapse + Chroma SDK running locally (Windows).
// No-ops silently on other platforms or when the SDK is unreachable.

const ROWS = 6;
const COLS = 22;

// Grid coordinates for the gameplay keys on a standard Razer ANSI layout.
const LANE_KEYS: readonly [number, number][] = [
  [3, 3],   // S
  [3, 4],   // D
  [3, 9],   // K
  [3, 10],  // L
];

const HIT_COLOR = packBGR(0x22, 0xff, 0x55);
const MISS_COLOR = packBGR(0xff, 0x11, 0x33);
const IDLE_COLOR = packBGR(0x18, 0x08, 0x40);
const FLASH_MS = 220;

const API_BASE = location.protocol === "https:"
  ? "https://chromasdk.io:54236/razer/chromasdk"
  : "http://localhost:54235/razer/chromasdk";

type Flash = { color: number; until: number };

let sessionUri: string | null = null;
let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let paintTimer: ReturnType<typeof setInterval> | null = null;
const flashes: Flash[] = LANE_KEYS.map(() => ({ color: 0, until: 0 }));


function packBGR(r: number, g: number, b: number): number {
  return (b << 16) | (g << 8) | r;
}


export async function initRazerLighting(): Promise<boolean> {
  if (sessionUri) return true;
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "MIDI HERO",
        description: "Rhythm game for BeatSaver maps",
        author: { name: "MIDI HERO", contact: "https://github.com" },
        device_supported: ["keyboard"],
        category: "game",
      }),
    });
    const data = await res.json();
    if (!data?.uri) return false;
    sessionUri = data.uri;
    heartbeatTimer = setInterval(sendHeartbeat, 10_000);
    paintTimer = setInterval(paint, 40);
    return true;
  } catch {
    return false;
  }
}


export function disposeRazerLighting(): void {
  if (heartbeatTimer) clearInterval(heartbeatTimer);
  if (paintTimer) clearInterval(paintTimer);
  heartbeatTimer = null;
  paintTimer = null;
  if (!sessionUri) return;
  fetch(sessionUri, { method: "DELETE" }).catch(() => {});
  sessionUri = null;
}


export function flashLane(line: number, isHit: boolean): void {
  if (!sessionUri) return;
  if (line < 0 || line >= LANE_KEYS.length) return;
  flashes[line] = {
    color: isHit ? HIT_COLOR : MISS_COLOR,
    until: performance.now() + FLASH_MS,
  };
}


function sendHeartbeat(): void {
  if (!sessionUri) return;
  fetch(sessionUri + "/heartbeat", { method: "PUT" }).catch(() => {});
}


function paint(): void {
  if (!sessionUri) return;

  const grid: number[][] = Array.from({ length: ROWS }, () => new Array(COLS).fill(0));
  const now = performance.now();

  for (let i = 0; i < LANE_KEYS.length; i++) {
    const [r, c] = LANE_KEYS[i];
    const f = flashes[i];
    grid[r][c] = f.until > now ? f.color : IDLE_COLOR;
  }

  fetch(sessionUri + "/keyboard", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ effect: "CHROMA_CUSTOM", param: grid }),
  }).catch(() => {});
}
