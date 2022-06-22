import React from "react";
import { IconType } from "react-icons";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({ img }: { img: any }) => {
  return <button className="cell">{img()}</button>;
};

export default Cell;
