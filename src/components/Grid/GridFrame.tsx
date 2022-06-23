import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";
import { memories } from "../data/fourBy";
import { forget } from "../../utils/forget";
import { mapImgs } from "../../utils/mapImgs";
import { IconContext, IconType } from "react-icons";
import { GridTypes } from "./type";
const matchReducer = (state: any, action: any) => {
  switch (action.type) {
    case "first":
      return {
        ...state,
        first: action.payload,
        guess: 1,
      };
    case "second":
      return {
        ...state,
        second: action.payload,
        guess: 2,
      };
    case "reset":
      return {
        solved: false,
        guess: 1,
        first: {},
        second: {},
      };
    case "solved":
      return {
        ...state,
        solved: true,
      };
    default:
      break;
  }
};

const GridFrame: React.FC<GridTypes> = ({ menu }) => {
  const [gridState, setGrid] = useState<any>({
    images: [],
    loading: true,
  });
  const [match, setMatch] = useReducer(matchReducer, {
    first: "1",
    second: "2",
    solved: false,
    guess: 1,
  });
  console.log(match);

  useEffect(() => {
    const forgotten = forget(memories);
    mapImgs(forgotten);
    setGrid(forgotten);
  }, []);

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
          {gridState.map(
            (memory: { image: IconType; id: number }, idx: number) => {
              return (
                <div className="cell-wrapper">
                  <Cell
                    pairId={memory.id}
                    key={idx}
                    img={memory.image}
                    idx={idx}
                    match={match}
                    setMatch={setMatch}
                  />
                </div>
              );
            }
          )}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default GridFrame;
