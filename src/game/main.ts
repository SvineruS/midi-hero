import "./style.css";
import { loadOrDownloadSong } from "../songs/songLoader.ts";
import { StorageUtil } from "../settings/settings.ts";

const HIT_TIME_SUM = 0.03 + 0.1;
function hitTimeToSlider(hitTime: number) { return String(HIT_TIME_SUM - hitTime); }
function sliderToHitTime(sliderVal: number) { return HIT_TIME_SUM - sliderVal; }

function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function cloneNotes(notes: any[]) {
  return notes.map(n => ({ ...n, status: undefined }));
}

function getGrade(accuracy: number) {
  if (accuracy >= 1) return { letter: "S+", color: "#50e2e3" };
  if (accuracy >= 0.99) return { letter: "S", color: "#50e2e3" };
  if (accuracy >= 0.95) return { letter: "A", color: "#4ade80" };
  if (accuracy >= 0.85) return { letter: "B", color: "#a3e635" };
  if (accuracy >= 0.75) return { letter: "C", color: "#eab308" };
  if (accuracy >= 0.60) return { letter: "D", color: "#f97316" };
  if (accuracy >= 0.40) return { letter: "E", color: "#ef4444" };
  return { letter: "F", color: "#991b1b" };
}

const KEYS = { 'KeyS': 0, 'KeyD': 1, 'KeyK': 2, 'KeyL': 3 } as const;

const GAME_HTML = `
<div id="failFlash"></div>
<audio id="audioPlayer"></audio>
<div class="header">
    <button class="header-btn" id="backToMarketplace">&larr; Marketplace</button>
    <div class="settings">
        <button class="settings-toggle" id="settingsToggle" title="Settings">&#9881;</button>
        <div class="controls hidden" id="controlsPanel">
            <label><span>Delay</span><input type="range" min="-1.0" max="0.5" value="0" step="0.001" id="timeOffset"/></label>
            <label><span>Difficulty</span><input type="range" min="0.03" max="0.1" value="0.05" step="0.01" id="hitTime"/></label>
            <label><span>BG lights</span><input type="range" min="0.03" max="0.75" value="0.5" step="0.01" id="visibility"/></label>
            <label><span>Volume</span><input type="range" min="0" max="1" value="0.5" step="0.01" id="volume"/></label>
        </div>
    </div>
</div>
<div id="startOverlay" class="overlay">
    <div class="panel loading">
        <div class="skel-group">
            <div class="skel skel-cover"></div>
            <div class="skel skel-title"></div>
            <div class="skel skel-author"></div>
            <div class="skel-chips">
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
            </div>
            <div class="skel skel-hint"></div>
        </div>
        <img id="startCover" alt=""/>
        <div class="info">
            <h1 id="startTitle"></h1>
            <h2 id="startAuthor"></h2>
            <div class="meta">
                <span id="startDiff"></span>
                <span id="startBpm"></span>
                <span id="startDuration"></span>
                <span id="startNps"></span>
            </div>
            <p class="hint">Press <kbd>Space</kbd> or click anywhere to start</p>
        </div>
    </div>
</div>
<div id="endOverlay" class="overlay hidden">
    <div class="panel">
        <div id="endGrade" class="grade"></div>
        <div class="stats">
            <div><span>Score</span><strong id="endScore"></strong></div>
            <div><span>Accuracy</span><strong id="endAccuracy"></strong></div>
            <div><span>Max combo</span><strong id="endMaxCombo"></strong></div>
            <div><span>Hits</span><strong id="endHits"></strong></div>
            <div><span>Fails</span><strong id="endFails"></strong></div>
        </div>
        <div class="actions">
            <button id="endReplay">Play again</button>
            <button id="endBack">Marketplace</button>
        </div>
    </div>
</div>
`;


// Module-level state (persists across games)
let domInjected = false;
let animationFrameId: number | null = null;
let abortController: AbortController | null = null;

// Per-game state (set inside initGame)
let game: any;
let gameStarted = false;
let audioPlayerElem: HTMLAudioElement;


function $(container: HTMLElement, selector: string) {
  return container.querySelector(selector)!;
}

function stopAnimation() {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}


export async function initGame(
  container: HTMLElement,
  songId: string,
  diffI: number,
  onBack: () => void,
) {
  // Abort previous game's listeners
  abortController?.abort();
  abortController = new AbortController();
  const { signal } = abortController;
  stopAnimation();

  // Inject DOM once, attach renderer once
  if (!domInjected) {
    container.innerHTML = GAME_HTML;
    const { attachRenderer } = await import("./3d/3d.ts");
    attachRenderer(container);
    domInjected = true;
  }

  // Lazy-import Game class (triggers 3d.ts side effects on first call)
  const { Game } = await import("./game/game.ts");

  // Query DOM elements scoped to container
  audioPlayerElem = $(container, "#audioPlayer") as HTMLAudioElement;
  const hitTimeElem = $(container, "#hitTime") as HTMLInputElement;
  const timeOffsetElem = $(container, "#timeOffset") as HTMLInputElement;
  const visibilityElem = $(container, "#visibility") as HTMLInputElement;
  const volumeElem = $(container, "#volume") as HTMLInputElement;
  const settingsToggleElem = $(container, "#settingsToggle") as HTMLButtonElement;
  const controlsPanelElem = $(container, "#controlsPanel") as HTMLDivElement;
  const startOverlayElem = $(container, "#startOverlay") as HTMLDivElement;
  const startCoverElem = $(container, "#startCover") as HTMLImageElement;
  const startTitleElem = $(container, "#startTitle") as HTMLElement;
  const startAuthorElem = $(container, "#startAuthor") as HTMLElement;
  const startDiffElem = $(container, "#startDiff") as HTMLElement;
  const startBpmElem = $(container, "#startBpm") as HTMLElement;
  const startDurationElem = $(container, "#startDuration") as HTMLElement;
  const startNpsElem = $(container, "#startNps") as HTMLElement;
  const endOverlayElem = $(container, "#endOverlay") as HTMLDivElement;
  const endGradeElem = $(container, "#endGrade") as HTMLElement;
  const endScoreElem = $(container, "#endScore") as HTMLElement;
  const endAccuracyElem = $(container, "#endAccuracy") as HTMLElement;
  const endMaxComboElem = $(container, "#endMaxCombo") as HTMLElement;
  const endHitsElem = $(container, "#endHits") as HTMLElement;
  const endFailsElem = $(container, "#endFails") as HTMLElement;
  const endReplayBtn = $(container, "#endReplay") as HTMLButtonElement;
  const endBackBtn = $(container, "#endBack") as HTMLButtonElement;
  const backToMarketplaceBtn = $(container, "#backToMarketplace") as HTMLButtonElement;

  // Reset overlay state for new game
  startOverlayElem.classList.remove("hidden");
  startOverlayElem.querySelector(".panel")!.classList.add("loading");
  endOverlayElem.classList.add("hidden");
  gameStarted = false;

  // Load settings
  const timeOffset = StorageUtil.get("timeOffset") ?? 0;
  const hitTime = StorageUtil.get("hitTime") || 0.075;
  const visibility = StorageUtil.get("visibility") ?? 0.25;
  const audioVolume = StorageUtil.get("audioVolume") ?? 0.5;

  hitTimeElem.value = hitTimeToSlider(hitTime);
  timeOffsetElem.value = timeOffset;
  visibilityElem.value = visibility;
  volumeElem.value = audioVolume;

  // Load song
  const { audio, meta, songData } = await loadOrDownloadSong(songId);
  const difficulty = meta.difficulties[+diffI] ?? meta.difficulties[0];
  game = new Game(cloneNotes(songData.difficulties[diffI].notes), songData.lightEvents, meta, difficulty);

  audioPlayerElem.src = URL.createObjectURL(audio);
  audioPlayerElem.volume = audioVolume;
  audioPlayerElem.load();

  game.setTimeOffset(timeOffset);
  game.setHitWindow(hitTime);
  game.visuals.backgroundVisuals.updateVisibility(visibility);

  // Populate start overlay
  startCoverElem.src = meta.coverURL;
  startTitleElem.textContent = meta.songName;
  startAuthorElem.textContent = meta.songAuthor;
  const charPrefix = difficulty.characteristic && difficulty.characteristic !== "Standard"
    ? `${difficulty.characteristic} ` : "";
  startDiffElem.textContent = `${charPrefix}${difficulty.name}`;
  startBpmElem.textContent = `${meta.bpm} BPM`;
  startDurationElem.textContent = formatSeconds(meta.duration);
  startNpsElem.textContent = `${difficulty.notesPerSecond.toFixed(2)} NPS`;
  startOverlayElem.querySelector(".panel")!.classList.remove("loading");


  // --- Event handlers (all use signal for cleanup) ---

  function startGameplay() {
    if (gameStarted) return;
    gameStarted = true;
    startOverlayElem.classList.add("hidden");
    audioPlayerElem.play();
  }

  function onSongEnd() {
    const stats = game.getStats();
    const grade = getGrade(stats.accuracy);
    endGradeElem.textContent = grade.letter;
    endGradeElem.style.color = grade.color;
    endGradeElem.style.textShadow = `0 0 40px ${grade.color}, 0 0 80px ${grade.color}`;
    endScoreElem.textContent = String(stats.score);
    endAccuracyElem.textContent = `${(stats.accuracy * 100).toFixed(1)}%`;
    endMaxComboElem.textContent = String(stats.maxCombo);
    endHitsElem.textContent = String(stats.hits);
    endFailsElem.textContent = String(stats.fails);
    endOverlayElem.classList.remove("hidden");
    gameStarted = false;
  }

  function keyPressed(e: any) {
    if (!endOverlayElem.classList.contains("hidden")) return;

    if (e.key == " ") {
      if (!gameStarted) {
        startGameplay();
      } else if (audioPlayerElem.paused) {
        audioPlayerElem.play();
      } else {
        audioPlayerElem.pause();
      }
      e.preventDefault();
      return;
    }
    if (!gameStarted) return;
    const keyId = KEYS[e.code];
    if (keyId == undefined) return;
    game.click(keyId);
    e.preventDefault();
  }

  // Navigation
  backToMarketplaceBtn.addEventListener("click", onBack, { signal });
  endBackBtn.addEventListener("click", onBack, { signal });
  endReplayBtn.addEventListener("click", () => {
    endOverlayElem.classList.add("hidden");
    startOverlayElem.classList.remove("hidden");
    startOverlayElem.querySelector(".panel")!.classList.remove("loading");
    gameStarted = false;
    game = new Game(cloneNotes(songData.difficulties[diffI].notes), songData.lightEvents, meta, difficulty);
    game.setTimeOffset(timeOffset);
    game.setHitWindow(hitTime);
    game.visuals.backgroundVisuals.updateVisibility(visibility);
    audioPlayerElem.currentTime = 0;
  }, { signal });

  // Game controls
  startOverlayElem.addEventListener("click", startGameplay, { signal });
  document.body.addEventListener("keydown", keyPressed, { signal });
  window.addEventListener("resize", game.visuals.resize, { signal });
  audioPlayerElem.addEventListener("ended", onSongEnd, { signal });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) audioPlayerElem.pause();
  }, { signal });

  // Settings
  settingsToggleElem.addEventListener("click", () => {
    controlsPanelElem.classList.toggle("hidden");
  }, { signal });
  timeOffsetElem.addEventListener("input", (e: any) => {
    game.setTimeOffset(+e.target.value);
    StorageUtil.set("timeOffset", +e.target.value);
  }, { signal });
  hitTimeElem.addEventListener("input", (e: any) => {
    const ht = sliderToHitTime(+e.target.value);
    game.setHitWindow(ht);
    StorageUtil.set("hitTime", ht);
  }, { signal });
  visibilityElem.addEventListener("input", (e: any) => {
    game.visuals.backgroundVisuals.updateVisibility(+e.target.value);
    StorageUtil.set("visibility", +e.target.value);
  }, { signal });
  volumeElem.addEventListener("input", (e: any) => {
    audioPlayerElem.volume = +e.target.value;
    StorageUtil.set("audioVolume", +e.target.value);
  }, { signal });

  // Start animation loop
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    if (!game || document.hidden) return;
    game.update(audioPlayerElem.currentTime);
  }
  animate();
}


export function stopGame() {
  abortController?.abort();
  abortController = null;
  stopAnimation();
  if (audioPlayerElem) {
    audioPlayerElem.pause();
    audioPlayerElem.src = "";
  }
  game = null;
  gameStarted = false;
}
