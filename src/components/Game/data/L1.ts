import { GiHummingbird, GiFox } from "react-icons/gi";

import { IconType } from "react-icons";

import { shuffle } from "../../../utils/memories";
export interface Memory {
  id: string;
  uniqueId: string;
  image: IconType;
}
const Level = (images: Memory[]) => ({
  images: images.map((img) => Object.freeze(img))
});
const memoriesL1: Memory[] = [
  {
    id: `1`,
    uniqueId: `41`,
    image: GiHummingbird
  },
  {
    id: `2`,
    uniqueId: `42`,
    image: GiFox
  },
  {
    id: `1`,
    uniqueId: `43`,
    image: GiHummingbird
  },
  {
    id: `2`,
    uniqueId: `44`,
    image: GiFox
  }
];
const L1 = Level(shuffle(memoriesL1));
export { L1 };
