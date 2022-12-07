import React from "react";
import { IconType } from "react-icons";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ img }: { img: { image: IconType } }) => {
  return (
    <div className="cell-container">
      <button className="cell-btn"></button>
    </div>
  );
};

export default Cell;
