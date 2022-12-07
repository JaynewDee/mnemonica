import { useEffect, useMemo, useState } from "react";
import Score from "./Dock/Score";
import "./Game.scss";
import TileGrid from "./PlayField/Grid/TileGrid";
const Game = () => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    paused: true,
    score: 0
  });
  const [isSolved, setIsSolved] = useState(false);

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
    setIsSolved(true);
  };

  useEffect(() => {
    const onKeyDown = (e: any) => (e.key === " " ? pause() : null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="game-container">
      <header className="score-board">
        <Score score={gameState.score} />
        {isSolved ? (
          <div className="proceed">
            <h3>SOLVED</h3> <button autoFocus={true}>PROCEED {">"}</button>
          </div>
        ) : (
          <></>
        )}
      </header>
      <TileGrid
        isPaused={gameState.paused}
        level={gameState.level}
        levelUp={levelUp}
        updateScore={adjustScore}
        isSolved={isSolved}
        setIsSolved={setIsSolved}
      />
    </div>
  );
};

export default Game;
