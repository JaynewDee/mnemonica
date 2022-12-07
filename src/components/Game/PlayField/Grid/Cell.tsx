import React, { SetStateAction } from "react";
import { dispatchGuess } from "../../../../utils/reducers";
import { Dispatch } from "react";
import { Memory } from "../../data/L1";

export interface CellTypes {
  data: Memory;
  gridDispatch: Dispatch<any>;
  turn: number;
  updateScore: Dispatch<SetStateAction<number>>;
}

export const isVisible = (dataState: string) =>
  dataState === "show" || dataState === "solved" || dataState === "claimed";

const Cell: React.FC<CellTypes> = ({
  data,
  gridDispatch,
  updateScore,
  turn
}) => {
  const { id, uniqueId } = data;
  const handleEventDispatch = (e: any) => {
    gridDispatch(
      dispatchGuess(e.target.id, e.target.dataset.unique, updateScore)
    );
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
