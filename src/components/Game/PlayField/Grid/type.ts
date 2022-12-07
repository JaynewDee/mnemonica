import { Memory } from "../../data/L1";
import { Dispatch } from "react";
export interface CellTypes {
  data: Memory;
  gridDispatch: Dispatch<any>;
  turn: number;
}
