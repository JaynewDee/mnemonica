import React, { SyntheticEvent, useReducer } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { L1 } from "../../data";
import { gridSize } from "../../../../utils/memories";
import { Memory } from "../../data/L1";
import { gridReducer } from "../../../../utils/reducers";

export interface GridState {
  images: Memory[];
}
const TileGrid: React.FC = () => {
  const [grid, dispatch] = useReducer(gridReducer, {
    images: [...L1.images],
    loading: true
  });
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension
  };

  return (
    <IconContext.Provider value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}>
      <article style={containerStyles} className="grid-container">
        {grid.images.map((item: Memory) => (
          <Cell key={item.uniqueId} data={item} gridDispatch={dispatch} />
        ))}
      </article>
    </IconContext.Provider>
  );
};

export default TileGrid;
