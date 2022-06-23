import React, { useState } from "react";
import { IconType } from "react-icons";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({
  img,
  idx,
  setGuess,
}: {
  img: any;
  idx: number;
  setGuess: any;
}) => {
  const [flipState, setFlip] = useState({ condition: false });

  const manageGuess = (e: any) => {
    console.log(e);
    const { target } = e.target;
    if (flipState.condition === false) {
      setGuess(e.target);
      setFlip({ ...flipState, condition: !flipState.condition });
    } else {
      return;
    }
  };

  return (
    <button
      id={`${idx}`}
      onClick={(e) => {
        manageGuess(e);
      }}
      style={{
        animation: `flip .5s ease-in-out ${
          3 + (idx / 2) * (idx / 100)
        }s forwards`,
      }}
      className={flipState.condition ? `cell-flipped` : `cell`}
    >
      <div className="cell-icon">{img()}</div>
    </button>
  );
};

export default Cell;
