import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import "./Game.scss";
const Game = () => {
  const [gameState, setGameState] = useState({
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
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return (
    <div>
      <div>{gameState.paused ? <Menu pause={pause} /> : <div></div>}</div>
    </div>
  );
};

export default Game;
