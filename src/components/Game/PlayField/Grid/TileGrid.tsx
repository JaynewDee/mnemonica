import React, { Dispatch, SetStateAction, useEffect } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { gridSize } from "../../../../utils/memories";
import { L1, Memory } from "../../data/L1";
import { useGridReducer, useLvlReducer } from "../../../../utils/reducers";
import Menu from "../../Menu/Menu";
import { isVisible } from "./Cell";
export interface GridState {
  images: Memory[];
  turn: number | "solved";
  previousId: string | undefined;
  previousUnique: string | undefined;
  solved: number;
  score: number;
}
interface GridProps {
  isPaused: boolean;
  level: number[];
  levelUp: Dispatch<SetStateAction<number[]>>;
  updateScore: any;
  setIsSolved: Dispatch<SetStateAction<boolean>>;
  isSolved?: boolean;
}

const TileGrid: React.FC<GridProps> = ({
  isPaused,
  level,
  updateScore,
  setIsSolved,
  levelUp
}) => {
  const [grid, dispatch] = useGridReducer(L1.images);
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };
  useEffect(() => {
    const numSolved = grid.images.filter((img: Memory) =>
      isVisible(img.state)
    ).length;
    if (numSolved >= grid.images.length) levelUp([2, 1]);
  }, [grid]);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(170,0,0, .75)" }}>
        <article style={containerStyles} className="grid-container">
          {grid.images.map((item: Memory) => (
            <Cell
              key={item.uniqueId}
              data={item}
              gridDispatch={dispatch}
              turn={grid.turn}
              updateScore={updateScore}
            />
          ))}
        </article>
      </IconContext.Provider>
      {isPaused ? <Menu /> : <></>}
    </>
  );
};

export default TileGrid;
