import React, { Dispatch, SetStateAction, useEffect } from "react";
import { actionLevelUp, ReducerDispatch } from "../../../../utils/reducers";
import { GridState } from "../Grid/TileGrid";

interface ProceedProps {
  isSolved: boolean;
  gridDispatch: any;
}
const Proceed: React.FC<ProceedProps> = ({ isSolved, gridDispatch }) => {
  return (
    <div className="proceed-container">
      {isSolved ? (
        <button
          className="proceed"
          autoFocus={true}
          onClick={() => {
            gridDispatch({ type: "levelUp", id: null, uniqueId: null });
          }}
        >
          PROCEED
        </button>
      ) : (
        <button className="proceed" disabled>
          PROCEED
        </button>
      )}
    </div>
  );
};

export default Proceed;
