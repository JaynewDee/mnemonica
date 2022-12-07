import React, { createRef, SyntheticEvent, useMemo, useState } from "react";
import { dispatchGuess } from "../../../../utils/reducers";
import { Dispatch } from "react";
import { Memory } from "../../data/L1";

export interface CellTypes {
  data: Memory;
  gridDispatch: Dispatch<any>;
  turn: number;
}

const Cell: React.FC<CellTypes> = ({ data, gridDispatch }) => {
  const cardRef = createRef<any>();
  const { id, uniqueId } = data;
  const handleEventDispatch = (e: any) => {
    gridDispatch(dispatchGuess(e.target.id, e.target.dataset.unique));
  };
  const isVisible = () =>
    data.state === "show" ||
    data.state === "solved" ||
    data.state === "claimed";
  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={data.state}
        className={data.state}
        ref={cardRef}
        onClick={handleEventDispatch}
      >
        {isVisible() ? (
          data.image({ size: "33%", pointerEvents: "none" })
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Cell;
