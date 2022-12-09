import {
  GiHummingbird,
  GiFox,
  GiBigEgg,
  GiCat,
  GiPotionBall
} from "react-icons/gi";

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
const memoriesL3: Memory[] = [
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
    id: `3`,
    uniqueId: `45`,
    image: GiBigEgg,
    state: "hidden",
    memory: "egg"
  },
  {
    id: `3`,
    uniqueId: `46`,
    image: GiBigEgg,
    state: "hidden",
    memory: "egg"
  },
  {
    id: `4`,
    uniqueId: `47`,
    image: GiCat,
    state: "hidden",
    memory: "cat"
  },
  {
    id: `4`,
    uniqueId: `48`,
    image: GiCat,
    state: "hidden",
    memory: "cat"
  },
  {
    id: `powerup`,
    uniqueId: `doubleScore`,
    image: GiPotionBall,
    state: "hidden",
    memory: "strength"
  }
];
const L3 = Level(shuffle(memoriesL3));
export { L3 };
