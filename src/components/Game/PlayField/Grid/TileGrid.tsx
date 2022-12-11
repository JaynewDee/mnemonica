import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { MemoryType } from "../../data/types";
import {
  actionLevelUp,
  ReducerDispatch,
  useGridReducer
} from "../../../../utils/reducers";
import { isVisible } from "./Cell";
import Dock from "../../Dock/Dock";
import { LVL3 } from "../../data/factory";
import { useScoreState } from "../../../../utils/hooks";

export interface GridState {
  images: MemoryType[];
  turn?: number | "solved";
  previousId?: string | undefined;
  previousUnique?: string | undefined;
  solved: number;
}
interface GridProps {
  isPaused: boolean;
  level: number[];
  levelUp: Dispatch<SetStateAction<number[]>>;
}

const gridSize = (arrayLength: number) => String(Math.sqrt(arrayLength));

const TileGrid: React.FC<GridProps> = ({ isPaused }) => {
  const [grid, dispatch] = useGridReducer(LVL3.story.tiles);
  const [isSolved, setIsSolved] = useState(false);
  const [scoreState, setScoreState]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useScoreState(0);

  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };

  useEffect(() => {
    const numSolved = grid.images.filter((img: MemoryType) =>
      isVisible(img.state)
    ).length;
    if (numSolved >= grid.images.length) setIsSolved(true);
  }, [grid, setIsSolved]);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(170,0,0, .75)" }}>
        <header className="score-board">
          <Dock scoreState={scoreState} />
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
              gridState={grid}
              turn={grid.turn}
              setScore={setScoreState}
            />
          ))}
        </article>
      </IconContext.Provider>
    </>
  );
};

export default TileGrid;
