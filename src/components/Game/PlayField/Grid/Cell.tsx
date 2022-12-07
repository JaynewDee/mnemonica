import React, { createRef, SyntheticEvent } from "react";
import { CellTypes } from "./type";
import {
  dispatchCardFlip,
  dispatchWrong,
  dispatchCorrect
} from "../../../../utils/reducers";
const Cell: React.FC<CellTypes> = ({ data, gridDispatch }) => {
  const cardRef = createRef<any>();
  const { id, uniqueId } = data;

  const handleEventDispatch = (e: any) => {
    console.log(e.target);
    gridDispatch(dispatchCardFlip(e.target.id, e.target.dataset.unique));
  };
  return (
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        data-state={data.state}
        className={data.state === "show" ? "cell-btn-show" : "cell-btn-hidden"}
        ref={cardRef}
        onClick={handleEventDispatch}
      >
        {data.state === "show" ? (
          data.image({ size: "2rem", pointerEvents: "none" })
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Cell;
