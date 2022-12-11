import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from "react";
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
  levelUp: Dispatch<SetStateAction<number[]>>;
  liftScoreState: Dispatch<SetStateAction<number>>;
  liftGridDispatch: Dispatch<SetStateAction<any>>;
  setSolved: Dispatch<SetStateAction<boolean>>;
}

const gridSize = (arrayLength: number) => String(Math.sqrt(arrayLength));

const TileGrid: React.FC<GridProps> = ({
  isPaused,
  liftScoreState,
  liftGridDispatch,
  setSolved
}) => {
  const [grid, dispatch] = useGridReducer(LVL3.story.tiles);
  const [scoreState, setScoreState]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useScoreState(0);
  liftGridDispatch(dispatch);
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
    if (numSolved >= grid.images.length) setSolved(true);
  }, [grid, setSolved]);
  useEffect(() => {
    liftScoreState(scoreState);
  }, [grid, liftScoreState, scoreState]);

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
