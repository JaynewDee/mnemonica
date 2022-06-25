import { IconType } from "react-icons";

export interface CellTypes {
  image: IconType;
  pairId: number;
  uniqueId: number;
  onClick: any;
  classState: string;
  gridState: any;
  gridDispatch: any;
}
export interface GridTypes {
  menu: boolean;
  images: [];
}
