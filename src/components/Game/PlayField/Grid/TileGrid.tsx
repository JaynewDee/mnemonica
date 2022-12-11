import React, { Dispatch, SetStateAction, useEffect } from "react";
import Cell, { isVisible } from "./Cell";
import { IconContext } from "react-icons";
import { MemoryType } from "../../data/types";
import { useGridReducer } from "../../../../utils/reducers";
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
  liftScoreState: Dispatch<SetStateAction<number>>;
  setSolved: Dispatch<SetStateAction<boolean>>;
}

const gridSize = (arrayLength: number) => String(Math.sqrt(arrayLength));

const TileGrid: React.FC<GridProps> = ({
  isPaused,
  level,
  liftScoreState,
  setSolved
}) => {
  const [grid, dispatch] = useGridReducer(LVL3.story.tiles);
  const [scoreState, setScoreState]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useScoreState(0);
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: "grid",
    opacity: isPaused ? 0.07 : 1
  };

  useEffect(() => {
    const numSolved = grid.images.filter((img: MemoryType) =>
      isVisible(img.state)
    ).length;
    if (numSolved >= grid.images.length) {
      dispatch({ type: "levelUp", newLevel: level });
      setSolved(true);
    }
  }, [dispatch, grid, level, setSolved]);

  useEffect(() => {
    liftScoreState(scoreState);
  }, [dispatch, grid, liftScoreState, scoreState]);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(170,0,0, .75)" }}>
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
