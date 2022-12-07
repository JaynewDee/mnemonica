import { useEffect, useState } from "react";
import "./Game.scss";
import TileGrid from "./PlayField/Grid/TileGrid";
const Game = () => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    paused: true
  });

  const pause = () =>
    setGameState({
      ...gameState,
      paused: !gameState.paused
    });

  const levelUp = () =>
    setGameState((prev) => ({
      ...gameState,
      level: [prev.level[0] + 1, prev.level[1]]
    }));

  useEffect(() => {
    const onKeyDown = (e: any) => (e.key === " " ? pause() : null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="game-container">
      <TileGrid
        isPaused={gameState.paused}
        level={gameState.level}
        levelUp={levelUp}
      />
    </div>
  );
};

export default Game;
