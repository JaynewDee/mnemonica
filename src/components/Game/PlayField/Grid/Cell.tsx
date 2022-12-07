import React, { createRef, SyntheticEvent, useMemo, useState } from "react";
import { CellTypes } from "./type";
import { dispatchGuess } from "../../../../utils/reducers";

const Cell: React.FC<CellTypes> = ({ data, gridDispatch }) => {
  const cardRef = createRef<any>();
  const { id, uniqueId } = data;
  const handleEventDispatch = (e: any) => {
    gridDispatch(dispatchGuess(e.target.id, e.target.dataset.unique));
  };

  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={data.state}
        className={
          data.state === "show"
            ? "cell-btn-show"
            : data.state === "solved"
            ? "cell-btn-solved"
            : "cell-btn-hidden"
        }
        style={
          data.state === "show" || data.state === "solved"
            ? { pointerEvents: "none" }
            : {}
        }
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
