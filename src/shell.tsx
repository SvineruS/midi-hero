import { render } from "preact";
import "./marketplace/index.css";
import App from "./marketplace/App.tsx";
import type { MultiplayerRoom } from "./multiplayer/room.ts";

const marketplaceContainer = document.getElementById("marketplace-container")!;
const gameContainer = document.getElementById("game-container")!;
const rootEl = document.getElementById("root")!;

function showMarketplace() {
  gameContainer.style.display = "none";
  marketplaceContainer.style.display = "";
  location.hash = "";

  render(<App onPlay={startGame} onJoinLobby={showLobby} />, rootEl);
}

async function showLobby(session: MultiplayerRoom) {
  gameContainer.style.display = "none";
  marketplaceContainer.style.display = "";
  location.hash = "";

  const { default: LobbyUI } = await import("./multiplayer/LobbyUI.tsx");

  render(
    <LobbyUI
      session={session}
      onStartGame={(songId, diffI, sess) => startGame(songId, diffI, sess)}
      onCancel={() => {
        session.leave();
        showMarketplace();
      }}
    />,
    rootEl,
  );
}

async function startGame(songId: string, diffI: number, session: MultiplayerRoom | null = null) {
  marketplaceContainer.style.display = "none";
  gameContainer.style.display = "";
  location.hash = `#${songId}-${diffI}`;

  const { initGame, stopGame } = await import("./game/main.ts");

  const onBack = session
    ? () => { stopGame(); showLobby(session); }
    : () => { stopGame(); showMarketplace(); };

  const onReplay = session
    ? () => { stopGame(); startGame(songId, diffI, session); }
    : null;

  await initGame(gameContainer, songId, diffI, onBack, session, onReplay);
}

// Boot: check for deep link hash (#songId-diffI)
const hash = location.hash.substring(1);
if (hash && hash.includes("-")) {
  const [songId, diffI] = hash.split("-");
  startGame(songId, parseInt(diffI));
} else {
  showMarketplace();
}
