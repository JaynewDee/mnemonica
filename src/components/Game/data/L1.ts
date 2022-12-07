import { GiHummingbird, GiFox } from "react-icons/gi";

import { FiSave } from "react-icons/fi";
import { IconType } from "react-icons";

export interface Memory {
  id: number;
  uniqueId: number;
  image: IconType;
}
const Level = (images: Memory[]) => ({ images });
const memoriesL1: Memory[] = [
  {
    id: 1,
    uniqueId: 41,
    image: GiHummingbird
  },
  {
    id: 2,
    uniqueId: 42,
    image: GiFox
  },
  {
    id: 1,
    uniqueId: 43,
    image: GiHummingbird
  },
  {
    id: 2,
    uniqueId: 44,
    image: GiFox
  }
];
const L1 = Level(memoriesL1);
export { L1 };
