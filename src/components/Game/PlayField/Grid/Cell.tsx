import React, { createRef, SyntheticEvent, useRef } from "react";
import { IconType } from "react-icons";
import { Memory } from "../../data/L1";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ data }: { data: Memory }) => {
  const cardRef = createRef<any>();
  const { id, uniqueId } = data;
  const flipCard = (e: SyntheticEvent) => {
    console.log(cardRef.current);
  };
  return (
    // @ts-ignore
    <div className="cell-container">
      <button
        id={id}
        data-unique={uniqueId}
        className="cell-btn"
        ref={cardRef}
        onClick={flipCard}
      >
        {data.image({ size: "2rem" })}
      </button>
    </div>
  );
};

export default Cell;
