import React from "react";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({
  image,
  uniqueId,
  pairId,
  classState,
  gridDispatch,
}) => {
  const manageGuess = (e: any) => {
    console.log(uniqueId);
    gridDispatch({ type: "GUESS", payload: [uniqueId, 1, e.target.id] });
  };

  return (
    <div key={uniqueId * 100} className="cell-wrapper">
      <button
        key={uniqueId}
        id={`${pairId}`}
        onClick={(e: any) => {
          e.preventDefault();
          manageGuess(e);
        }}
        className={classState}
        disabled={classState !== `cell` ? true : false}
      >
        {image({ color: "rgba(0,0,0,.75)" })}
      </button>
    </div>
  );
};

export default Cell;
