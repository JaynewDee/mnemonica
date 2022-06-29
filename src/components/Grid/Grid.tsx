import React, { useEffect, useReducer } from "react";
import Cell from "./Cell";

import { IconContext, IconType } from "react-icons";
import { GridTypes } from "./type";
import { gridReducer } from "../../utils/reducers";

const Grid: React.FC<GridTypes> = ({ menuState, images }) => {
  console.log(`Grid component rendered`);
  const [gridState, gridDispatch] = useReducer(gridReducer, {
    images: images,
    turn: 1,
    first: "",
    second: "",
    solved: 0,
    vitality: 100,
  });

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
    if (gridState.solved >= images.length / 2) {
      gridDispatch({ type: `COMPLETED` });
    }
  }, [gridState.solved, images.length]);

  return (
    <IconContext.Provider value={{ color: "rgba(0,0,0,.75)", size: "3rem" }}>
      {gridState.loading ? (
        <p>Loading ...</p>
      ) : (
        <article key={"grid0,0"} className="grid-size">
          {gridState.images.map(
            (
              memory: {
                image: IconType;
                pairId: number;
                class: string;
                uniqueId: number;
              },
              index: number
            ) => {
              return (
                <Cell
                  turn={gridState.turn}
                  pairId={memory.pairId}
                  uniqueId={memory.uniqueId}
                  classState={memory.class}
                  image={memory.image}
                  gridDispatch={gridDispatch}
                  key={index}
                />
              );
            }
          )}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default React.memo(Grid);
