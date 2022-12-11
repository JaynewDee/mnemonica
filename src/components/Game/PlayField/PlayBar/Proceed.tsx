import React, { Dispatch, SetStateAction, useEffect } from "react";
import { actionLevelUp, ReducerDispatch } from "../../../../utils/reducers";
import { GridState } from "../Grid/TileGrid";

interface ProceedProps {
  isSolved: boolean;
  levelUp: Dispatch<SetStateAction<any>>;
}
const Proceed: React.FC<ProceedProps> = ({ isSolved, levelUp }) => {
  return (
    <div className="proceed-container">
      {isSolved ? (
        <button
          className="proceed"
          autoFocus={true}
          onClick={() => {
            levelUp(1);
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
