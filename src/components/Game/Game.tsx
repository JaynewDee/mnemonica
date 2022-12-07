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

  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " "
        ? setGameState({ ...gameState, paused: !gameState.paused })
        : null;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="game-container">
      <TileGrid isPaused={gameState.paused} />
    </div>
  );
};

export default Game;
