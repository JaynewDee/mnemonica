import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";
import { IconContext, IconType } from "react-icons";
import { memoriesL1 } from "../../data/L1";

const TileGrid: React.FC = () => {
  const [gridState, setGridState] = useState({
    images: [...memoriesL1],
    loading: true
  });

  return (
    <IconContext.Provider value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}>
      <article className="grid-container">
        {gridState.images.map((item, idx) => (
          <Cell data={item} />
        ))}
      </article>
    </IconContext.Provider>
  );
};

export default TileGrid;
