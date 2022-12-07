import React from "react";
import { IconType } from "react-icons";
import { Memory } from "../../data/L1";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ data }: { data: Memory }) => {
  return (
    <div className="cell-container">
      <button className="cell-btn">{data.image({ size: "2rem" })}</button>
    </div>
  );
};

export default Cell;
