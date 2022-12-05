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
  // const manageGuess = (e: any) => {
  //   console.log(e);
  // };

  return <button></button>;
};

export default Cell;
