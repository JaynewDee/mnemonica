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

interface MemoriesL1 {
  image: IconType;
}
const memories: MemoriesL1[] = [
  {
    image: GiHummingbird
  },
  {
    image: GiSunPriest
  },
  {
    image: GiHummingbird
  },
  {
    image: GiSunPriest
  }
];

export { memories };
