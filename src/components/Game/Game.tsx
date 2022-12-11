import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useScoreState } from "../../utils/hooks";
import "./Game.scss";
import Menu from "./Menu/Menu";
import TileGrid from "./PlayField/Grid/TileGrid";

interface GameProps {
  setWindowSize: Dispatch<SetStateAction<any>>;
}
const Game: React.FC<GameProps> = ({ setWindowSize }) => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    paused: true
  });

  const [scoreState, setScoreState]: any = useScoreState(0);
  const pause = () =>
    setGameState({
      ...gameState,
      paused: !gameState.paused
    });

  const levelUp = () => {
    setGameState((prev) => ({
      ...gameState,
      level: [(prev.level[0] += 1), prev.level[1]],
      solved: 0
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
        score={scoreState}
        setScore={setScoreState}
      />
      {gameState.paused ? <Menu setWindowSize={setWindowSize} /> : <></>}
    </div>
  );
};

export default Game;
