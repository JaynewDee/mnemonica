import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Dock from "./PlayField/Dock/Dock";
import "./Game.scss";
import Menu from "./Menu/Menu";
import TileGrid, { GridState } from "./PlayField/Grid/TileGrid";
import { ReducerDispatch } from "../../utils/reducers";
import Proceed from "./PlayField/PlayBar/Proceed";
import { MemoryType } from "./data/types";
import { isVisible } from "./PlayField/Grid/Cell";

interface GameProps {
  setWindowSize: Dispatch<SetStateAction<any>>;
}
const Game: React.FC<GameProps> = ({ setWindowSize }) => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    paused: true
  });
  const [scoreState, setScoreState] = useState(0);
  const [gridDispatch, setGridDispatch] = useState<any>();
  const [isSolved, setIsSolved] = useState(false);

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
      <header className="score-board">
        <Dock scoreState={scoreState} />
      </header>
      <div className="field-container">
        <div id="side-left">Side Left</div>
        <TileGrid
          liftGridDispatch={setGridDispatch}
          liftScoreState={setScoreState}
          isPaused={gameState.paused}
          setSolved={setIsSolved}
          level={gameState.level}
          levelUp={levelUp}
        />
        <div id="side-right">
          {" "}
          <Proceed isSolved={isSolved} gridDispatch={gridDispatch} />
        </div>
        {gameState.paused ? <Menu setWindowSize={setWindowSize} /> : <></>}
      </div>
      <div id="play-bar"></div>
    </div>
  );
};

export default Game;
