import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";

import { IconContext, IconType } from "react-icons";
import { GridTypes } from "./type";
import { gridReducer } from "../../utils/reducers";

const Grid: React.FC<GridTypes> = ({ menu, images }) => {
  const [gridState, gridDispatch] = useReducer(gridReducer, {
    images: images,
    loading: false,
    turn: 1,
    first: "",
    second: "",
  });
  console.log(gridState);
  useEffect(() => {
    const { turn, first, second } = gridState;
    if (turn === 3 && first === second) {
      gridDispatch({ type: "MATCH", payload: second });
    } else if (turn === 3 && first !== second) {
      gridDispatch({ type: "RESET_WRONG" });
    }
  }, [gridState]);

  return (
    <IconContext.Provider value={{ color: "rgba(0,0,0,.5)", size: "3rem" }}>
      {gridState.loading ? (
        <p>Loading ...</p>
      ) : (
        <article
          className="four-by"
          style={
            menu
              ? { filter: `blur(5px)`, opacity: ".1", pointerEvents: "none" }
              : { filter: "none" }
          }
        >
          {gridState.images.map(
            (memory: {
              image: IconType;
              pairId: number;
              class: string;
              uniqueId: number;
            }) => {
              return (
                <Cell
                  onClick={(e: any) => {}}
                  pairId={memory.pairId}
                  uniqueId={memory.uniqueId}
                  classState={memory.class}
                  image={memory.image}
                  key={Math.random() * 100}
                  gridState={gridState}
                  gridDispatch={gridDispatch}
                />
              );
            }
          )}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default Grid;
