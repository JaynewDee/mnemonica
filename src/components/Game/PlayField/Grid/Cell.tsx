import React, { SetStateAction, useState } from "react";
import {
  actionResetWrong,
  dispatchGuess,
  ReducerDispatch
} from "../../../../utils/reducers";
import { Dispatch } from "react";
import { MemoryType } from "../../data/types";

export interface CellTypes {
  data: MemoryType;
  previousId: string;
  gridDispatch: Dispatch<ReducerDispatch>;
  gridState: any;
  turn: number;
  setScore: Dispatch<SetStateAction<any>>;
}

export const isVisible = (dataState: string) => dataState !== "hidden";

const Cell: React.FC<CellTypes> = ({
  data,
  turn,
  gridDispatch,
  gridState,
  setScore,
  previousId
}) => {
  const handleEventDispatch = (e: any) => {
    gridDispatch(dispatchGuess(e.target.id, e.target.dataset.unique));
    if (turn === 2) {
      if (e.target.id === previousId) {
        setScore((prev: number) => prev + 50);
      } else {
        setScore((prev: number) => (prev - 10 <= 0 ? 0 : (prev -= 10)));
        setTimeout(() => {
          gridDispatch(actionResetWrong(gridState));
        }, 1500);
      }
    }
    if (data.uniqueId === "doubleScore" || data.uniqueId === "doubleScore2") {
      setScore((prev: number) => (prev += 250));
    }
  };

  const { id, uniqueId, state } = data;
  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={state}
        className={state}
        onClick={handleEventDispatch}
      >
        {isVisible(data.state) ? (
          data.image({ size: "66%", pointerEvents: "none" })
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Cell;
