import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ img, idx, pairId, match, setMatch }) => {
  const [flipState, setFlip] = useState({ condition: false, class: `cell` });
  console.log(flipState);
  const manageGuess = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    if (flipState.condition === false) {
      setFlip({ condition: !flipState.condition, class: `cell cell-flipped` });
    }
    if (!match.first) {
      setMatch({ type: "first", payload: pairId });
    } else if (match.first && !match.second) {
      setMatch({ type: "second", payload: pairId });
    }
  };

  return (
    <button
      id={`${idx}`}
      onClick={(e) => {
        e.preventDefault();
        manageGuess(e);
      }}
      className={`${flipState.class}`}
    >
      {img({ id: img.id, className: "r-icon" })}
    </button>
  );
};

export default Cell;
