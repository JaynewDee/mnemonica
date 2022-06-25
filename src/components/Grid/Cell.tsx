import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({
  image,
  uniqueId,
  pairId,
  classState,
  gridState,
  gridDispatch,
}) => {
  const manageGuess = (e: any) => {
    if (gridState.turn === 1) {
      gridDispatch({ type: "GUESS", payload: [uniqueId, 1, e.target.id] });
    } else if (gridState.turn === 2) {
      gridDispatch({ type: "GUESS", payload: [uniqueId, 1, e.target.id] });
    }
  };

  return (
    <div key={(Math.random() * 100) % 3} className="cell-wrapper">
      <button
        id={`${pairId}`}
        onClick={(e: any) => {
          e.preventDefault();
          manageGuess(e);
        }}
        className={classState}
        disabled={classState === `cell-solved` ? true : false}
      >
        {image({ color: "rgba(0,0,0,.75)" })}
      </button>
    </div>
  );
};

export default Cell;
