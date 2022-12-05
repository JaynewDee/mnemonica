import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";
import { IconContext, IconType } from "react-icons";

const GridFrame: React.FC = () => {
  const [gridState, setGrid] = useState<any>({
    images: [],
    loading: true
  });
  const [guess, setGuess] = useState();

  return (
    <IconContext.Provider value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}>
      <article className="four-by"></article>
    </IconContext.Provider>
  );
};

export default GridFrame;
