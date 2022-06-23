import React, { useEffect, useState, useReducer } from "react";
import Cell from "./Cell";
import { memories } from "../data/fourBy";
import { forget } from "../../utils/forget";
import { IconContext, IconType } from "react-icons";

const matchReducer = (state: any, action: any) => {
  switch (action.type) {
    case "first":
      return {
        ...state,
        first: action.payload,
      };
    case "second":
      return {
        ...state,
        second: action.payload,
      };
    default:
      break;
  }
};

const GridFrame: React.FC = () => {
  const [gridState, setGrid] = useState<any>({
    images: [],
    loading: true,
  });
  const [match, setMatch] = useReducer(matchReducer, { first: {}, second: {} });
  const [guess, setGuess] = useState();
  console.log(guess);
  useEffect(() => {
    const forgotten = forget(memories);
    setGrid(forgotten);
  }, []);

  return (
    <IconContext.Provider value={{ color: "rgba(170,0,0, .75)", size: "3rem" }}>
      {gridState.loading ? (
        <p>Loading ...</p>
      ) : (
        <article className="four-by">
          {gridState.map((memory: { image: IconType }, idx: number) => {
            return (
              <Cell
                key={idx}
                img={memory.image}
                idx={idx}
                setGuess={setGuess}
              />
            );
          })}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default GridFrame;
