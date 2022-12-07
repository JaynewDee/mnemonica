import { GiHummingbird, GiFox } from "react-icons/gi";

import { IconType } from "react-icons";

import { shuffle } from "../../../utils/memories";
export interface Memory {
  id: string;
  uniqueId: string;
  image: IconType;
  state: string;
  memory: string;
}
const Level = (images: Memory[]) => ({
  images: images.map((img) => Object.freeze(img))
});
const memoriesL1: Memory[] = [
  {
    id: `1`,
    uniqueId: `41`,
    image: GiHummingbird,
    state: "hidden",
    memory: "hummingbird"
  },
  {
    id: `2`,
    uniqueId: `42`,
    image: GiFox,
    state: "hidden",
    memory: "fox"
  },
  {
    id: `1`,
    uniqueId: `43`,
    image: GiHummingbird,
    state: "hidden",
    memory: "hummingbird"
  },
  {
    id: `2`,
    uniqueId: `44`,
    image: GiFox,
    state: "hidden",
    memory: "fox"
  }
];
const L1 = Level(shuffle(memoriesL1));
export { L1 };
