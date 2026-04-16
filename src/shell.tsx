import { render } from "preact";
import "./marketplace/index.css";
import App from "./marketplace/App.tsx";
import type { MultiplayerRoom } from "./multiplayer/room.ts";

const marketplaceContainer = document.getElementById("marketplace-container")!;
const gameContainer = document.getElementById("game-container")!;
const rootEl = document.getElementById("root")!;

let currentSession: MultiplayerRoom | null = null;
let isInGame = false;
let navigatingFromPopstate = false;

async function stopCurrentGame() {
  if (!isInGame) return;
  try {
    const { stopGame } = await import("./game/main.ts");
    stopGame();
  } catch {}
  isInGame = false;
}

function showMarketplace() {
  stopCurrentGame();
  currentSession = null;
  gameContainer.style.display = "none";
  marketplaceContainer.style.display = "";
  history.replaceState(null, "", window.location.pathname);
  document.title = "MIDI HERO";

  render(<App onPlay={startGame} onJoinLobby={showLobby} />, rootEl);
}

async function showLobby(session: MultiplayerRoom) {
  await stopCurrentGame();
  currentSession = session;
  gameContainer.style.display = "none";
  marketplaceContainer.style.display = "";

  // Wire the ONE callback: when room says "game ready", start it
  session.onGameReady = (songId, diffI) => startGame(songId, diffI, session);

  const { default: LobbyUI } = await import("./multiplayer/LobbyUI.tsx");

  render(
    <LobbyUI
      session={session}
      onCancel={() => { session.leave(); currentSession = null; showMarketplace(); }}
    />,
    rootEl,
  );
}

async function startGame(songId: string, diffI: number, session: MultiplayerRoom | null = null) {
  await stopCurrentGame();
  currentSession = session;
  isInGame = true;
  marketplaceContainer.style.display = "none";
  gameContainer.style.display = "";

  if (!navigatingFromPopstate) {
    history.pushState({ game: `${songId}-${diffI}` }, "", `#${songId}-${diffI}`);
  }

  const { initGame } = await import("./game/main.ts");

  const onBack = session
    ? () => { isInGame = false; showLobby(session); }
    : () => { isInGame = false; showMarketplace(); };

  await initGame(gameContainer, songId, diffI, onBack, session);
}

// Handle Back/Forward
window.addEventListener("popstate", () => {
  navigatingFromPopstate = true;
  const hash = location.hash.substring(1);
  if (hash && hash.includes("-") && !isInGame) {
    const [songId, diffI] = hash.split("-");
    startGame(songId, parseInt(diffI), currentSession);
  } else if (!hash || !hash.includes("-")) {
    showMarketplace();
  }
  navigatingFromPopstate = false;
});

// Boot
const bootHash = location.hash.substring(1);
if (bootHash && bootHash.includes("-")) {
  const [songId, diffI] = bootHash.split("-");
  history.replaceState(null, "", window.location.pathname);
  startGame(songId, parseInt(diffI));
} else {
  showMarketplace();
}
