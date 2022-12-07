import React, { createRef, SyntheticEvent } from "react";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ data }) => {
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
