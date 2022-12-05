import React from "react";
import { CellTypes } from "./type";

const Cell: React.FC<CellTypes> = ({
  img,
  idx,
  setGuess
}: {
  img: any;
  idx: number;
  setGuess: any;
}) => {
  return <button></button>;
};

export default Cell;
