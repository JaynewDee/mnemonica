import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { gridSize } from "../../../../utils/memories";
import { MemoryType } from "../../data/types";
import {
  actionLevelUp,
  ReducerDispatch,
  useGridReducer
} from "../../../../utils/reducers";
import Menu from "../../Menu/Menu";
import { isVisible } from "./Cell";
import Dock from "../../Dock/Dock";
import { LVL3 } from "../../data/factory";

export interface GridState {
  images: MemoryType[];
  turn?: number | "solved";
  previousId?: string | undefined;
  previousUnique?: string | undefined;
  solved: number;
  score: number;
}
interface GridProps {
  isPaused: boolean;
  level: number[];
  levelUp: Dispatch<SetStateAction<number[]>>;
  isSolved?: boolean;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const TileGrid: React.FC<GridProps> = ({ isPaused, score, setScore }) => {
  const [grid, dispatch] = useGridReducer(LVL3.story.tiles);

  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    const numSolved = grid.images.filter((img: MemoryType) =>
      isVisible(img.state)
    ).length;
    if (numSolved >= grid.images.length) {
      setIsSolved(true);
    }
  }, [grid, setIsSolved]);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(170,0,0, .75)" }}>
        <header className="score-board">
          <Dock score={score} />
          {isSolved ? (
            <>
              <h3>SOLVED</h3>
              <div className="proceed">
                <button
                  autoFocus={true}
                  onClick={(grid: GridState | ReducerDispatch | any) => {
                    setIsSolved(false);
                    dispatch(actionLevelUp(grid));
                  }}
                >
                  PROCEED
                </button>
              </div>
            </>
          ) : (
            <button className="proceed" disabled>
              PROCEED
            </button>
          )}
        </header>
        <article style={containerStyles} className="grid-container">
          {grid.images.map((item: MemoryType) => (
            <Cell
              key={item.uniqueId}
              previousId={grid.previousId}
              data={item}
              gridDispatch={dispatch}
              turn={grid.turn}
              score={score}
              setScore={setScore}
            />
          ))}
        </article>
      </IconContext.Provider>
    </>
  );
};

export default TileGrid;
