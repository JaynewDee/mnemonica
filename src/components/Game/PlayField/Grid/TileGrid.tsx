import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { gridSize } from "../../../../utils/memories";
import { L1, Memory } from "../../data/L1";
import { useGridReducer } from "../../../../utils/reducers";
import Menu from "../../Menu/Menu";

export interface GridState {
  images: Memory[];
  turn: number | "solved";
  previousId: string | undefined;
  previousUnique: string | undefined;
  solved: number;
}
interface GridProps {
  isPaused: boolean;
}
const TileGrid: React.FC<GridProps> = ({ isPaused }) => {
  const [grid, dispatch] = useGridReducer(L1.images);
  const [isSolved, setIsSolved] = useState(false);
  const [styleState, setStyleState] = useState({});
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };

  useEffect(() => {
    console.log(grid.solved);
    if (grid.solved >= grid.images.length / 2) setIsSolved(true);
  }, [grid]);
  return (
    <>
      <IconContext.Provider
        value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}
      >
        {isSolved ? <h3>SOLVED</h3> : <></>}
        <article style={containerStyles} className="grid-container">
          {grid.images.map((item: Memory) => (
            <Cell
              styles={styleState}
              key={item.uniqueId}
              data={item}
              gridDispatch={dispatch}
              turn={grid.turn}
            />
          ))}
        </article>
      </IconContext.Provider>
      {isPaused ? <Menu /> : <></>}
    </>
  );
};

export default TileGrid;
