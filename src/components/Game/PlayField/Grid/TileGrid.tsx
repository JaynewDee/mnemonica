import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";
import { IconContext, IconType } from "react-icons";
import { memories } from "../../../data/L1";

const TileGrid: React.FC = () => {
  const [gridState, setGridState] = useState({
    images: [],
    loading: true
  });

  return (
    <IconContext.Provider value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}>
      <article className="grid-container">
        {memories.map((item, idx) => (
          <Cell img={item} />
        ))}
      </article>
    </IconContext.Provider>
  );
};

export default TileGrid;
