import React, { SyntheticEvent, useMemo, useReducer } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { L1 } from "../../data";
import { gridSize } from "../../../../utils/memories";
import { Memory } from "../../data/L1";
import { gridReducer } from "../../../../utils/reducers";
import Menu from "../../Menu/Menu";

export interface GridState {
  images: Memory[];
}
interface GridProps {
  isPaused: boolean;
}
const TileGrid: React.FC<GridProps> = ({ isPaused }) => {
  const [grid, dispatch] = useReducer(gridReducer, {
    images: [...L1.images],
    loading: true
  });
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };

  return (
    <>
      <IconContext.Provider
        value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}
      >
        <article style={containerStyles} className="grid-container">
          {grid.images.map((item: Memory) => (
            <Cell key={item.uniqueId} data={item} gridDispatch={dispatch} />
          ))}
        </article>
      </IconContext.Provider>
      {isPaused ? <Menu /> : <></>}
    </>
  );
};

export default TileGrid;
