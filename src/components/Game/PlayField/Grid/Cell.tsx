import React, { SetStateAction, useEffect } from "react";
import { dispatchGuess } from "../../../../utils/reducers";
import { Dispatch } from "react";
import { Memory } from "../../data/L1";

export interface CellTypes {
  data: Memory;
  previousId: string;
  gridDispatch: Dispatch<any>;
  turn: number;
  score: number;
  setScore: Dispatch<SetStateAction<any>>;
}

export const isVisible = (dataState: string) =>
  dataState === "show" || dataState === "solved" || dataState === "claimed";

const Cell: React.FC<CellTypes> = ({
  data,
  turn,
  gridDispatch,
  score,
  setScore,
  previousId
}) => {
  const { id, uniqueId } = data;
  const handleEventDispatch = (e: any) => {
    gridDispatch(dispatchGuess(e.target.id, e.target.dataset.unique));
    if (turn === 2) {
      if (e.target.id === previousId) {
        setScore((prev: number) => prev + 50);
      } else setScore((prev: number) => (prev -= 10));
    }
    if (data.uniqueId === "doubleScore") {
      setScore((prev: number) => (prev += 250));
    }
  };

  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={data.state}
        className={data.state}
        onClick={handleEventDispatch}
      >
        {isVisible(data.state) ? (
          data.image({ size: "33%", pointerEvents: "none" })
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Cell;
