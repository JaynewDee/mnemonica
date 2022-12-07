import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import "./Game.scss";
import TileGrid from "./PlayField/Grid/TileGrid";
const Game = () => {
  const [gameState, setGameState] = useState({
    level: [0, 0],
    paused: true
  });

  const pause = () =>
    setGameState(() => {
      return {
        ...gameState,
        paused: !gameState.paused
      };
    });

  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " "
        ? setGameState(() => {
            return { ...gameState, paused: !gameState.paused };
          })
        : null;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div>
      <div>
        {gameState.paused ? (
          <Menu pause={pause} />
        ) : (
          <div>
            <TileGrid />
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
