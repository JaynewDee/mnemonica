import React, { createRef, SyntheticEvent, useMemo } from "react";
import { CellTypes } from "./type";
import { dispatchGuess } from "../../../../utils/reducers";

const Cell: React.FC<CellTypes> = ({ turn, data, gridDispatch }) => {
  const cardRef = createRef<any>();
  const { id, uniqueId } = data;
  const handleEventDispatch = (e: any) => {
    gridDispatch(dispatchGuess(e.target.id, e.target.dataset.unique));
  };
  const stylesSolved = {
    border: `1px solid green`
  };
  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={data.state}
        style={String(turn) === "solved" ? stylesSolved : {}}
        className={data.state === "show" ? "cell-btn-show" : "cell-btn-hidden"}
        ref={cardRef}
        onClick={handleEventDispatch}
      >
        {data.state === "show" ? (
          data.image({ size: "23%", pointerEvents: "none" })
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Cell;
