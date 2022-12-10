import { Dispatch } from "react";
import { MemoryType } from "../../data/types";
export interface CellTypes {
  data: MemoryType;
  gridDispatch: Dispatch<any>;
  turn: number;
}
