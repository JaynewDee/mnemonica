import { useEffect, useMemo, useState } from "react";
import { useGridReducer } from "../../utils/reducers";
import Score from "./Dock/Score";
import "./Game.scss";
import TileGrid from "./PlayField/Grid/TileGrid";
const Game = () => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    paused: true,
    score: 0
  });

  const adjustScore = (payload: number) => {
    setGameState({ ...gameState, score: gameState.score + payload });
  };

  const pause = () =>
    setGameState({
      ...gameState,
      paused: !gameState.paused
    });

  const levelUp = () => {
    setGameState((prev) => ({
      ...gameState,
      level: [(prev.level[0] += 1), prev.level[1]]
    }));
  };

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
        updateScore={adjustScore}
      />
    </div>
  );
};

export default Game;
