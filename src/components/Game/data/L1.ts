import {
  GiHummingbird,
  GiSunPriest,
  GiFox,
  GiHeartburn,
  GiHeraldicSun,
  GiAlienSkull,
  GiCaesar
} from "react-icons/gi";

import { FiSave } from "react-icons/fi";
import { IconType } from "react-icons";

export interface Memory {
  id: number;
  uniqueId: number;
  image: IconType;
}
const memoriesL1: Memory[] = [
  {
    id: 1,
    uniqueId: 41,
    image: GiHummingbird
  },
  {
    id: 2,
    uniqueId: 42,
    image: GiSunPriest
  },
  {
    id: 1,
    uniqueId: 43,
    image: GiHummingbird
  },
  {
    id: 2,
    uniqueId: 44,
    image: GiSunPriest
  }
];

export { memoriesL1 };
