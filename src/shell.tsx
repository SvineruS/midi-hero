import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import "./marketplace/index.css";
import App from "./marketplace/App.tsx";

const marketplaceContainer = document.getElementById("marketplace-container")!;
const gameContainer = document.getElementById("game-container")!;
let reactRoot: Root | null = null;

function showMarketplace() {
  gameContainer.style.display = "none";
  marketplaceContainer.style.display = "";
  location.hash = "";

  if (!reactRoot) {
    reactRoot = createRoot(document.getElementById("root")!);
  }
  reactRoot.render(
    <StrictMode>
      <App onPlay={startGame} />
    </StrictMode>
  );
}

async function startGame(songId: string, diffI: number) {
  marketplaceContainer.style.display = "none";
  gameContainer.style.display = "";
  location.hash = `#${songId}-${diffI}`;

  const { initGame, stopGame } = await import("./game/main.ts");

  await initGame(gameContainer, songId, diffI, () => {
    stopGame();
    showMarketplace();
  });
}

// Boot: check for deep link hash (#songId-diffI)
const hash = location.hash.substring(1);
if (hash && hash.includes("-")) {
  const [songId, diffI] = hash.split("-");
  startGame(songId, parseInt(diffI));
} else {
  showMarketplace();
}
