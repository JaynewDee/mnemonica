import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";

import { IconContext, IconType } from "react-icons";
import { GridTypes } from "./type";
import { gridReducer } from "../../utils/reducers";
import Menu from "../Menu/MenuFrame";

const Grid: React.FC<GridTypes> = ({ menu, images, setLevel }) => {
  const [gridState, gridDispatch] = useReducer(gridReducer, {
    images: images,
    turn: 1,
    first: "",
    second: "",
    solved: 0,
    vitality: 100,
  });
  console.log(gridState.solved);
  console.log(gridState.vitality);

  useEffect(() => {
    const { turn, first, second } = gridState;
    if (turn === 3 && first === second) {
      gridDispatch({ type: "MATCH", payload: second });
    } else if (turn === 3 && first !== second) {
      setTimeout(() => {
        gridDispatch({ type: "RESET_WRONG", payload: 5 });
      }, 100);
    }
  }, [gridState]);
  useEffect(() => {
    if (gridState.solved === images.length / 2) {
      setLevel();
      gridDispatch({ type: `COMPLETED` });
    }
  }, [gridState.solved, images.length]);
  return (
    <IconContext.Provider value={{ color: "rgba(0,0,0,.75)", size: "3rem" }}>
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
          {/* {menuState ? <Menu /> : null} */}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default React.memo(Grid);
