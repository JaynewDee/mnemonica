import { SetStateAction } from "react";
import { IconType } from "react-icons";

export interface CellTypes {
  image: IconType;
  pairId: number;
  uniqueId: number;
  classState: string;
  turn: number;
  gridDispatch: any;
}
export interface GridTypes {
  menuState: boolean;
  images: [] | any;
  level: number[];
}
