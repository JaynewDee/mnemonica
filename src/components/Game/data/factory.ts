#!/usr/bin/env ts-node

import { MemoryType, PowerUpType, StoryType, TileType } from "./types";
import { nanoid } from "nanoid";
import { IconType } from "react-icons";

const shuffle = (array: TileType[]): TileType[] =>
  array
    .map((value: TileType) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: TileType }) => value);

const duplicate = (memories: TileType[]) => [
  ...memories.map((mem) => Object.freeze(mem)),
  ...memories.map((mem) => Object.freeze(mem))
];

const Memory = ({ id, image }: { id: string; image: IconType }) => ({
  id,
  image,
  uniqueId: nanoid(),
  state: "hidden"
});

const PowerUp = ({
  id,
  uniqueId,
  image
}: {
  id: string;
  uniqueId: string;
  image: IconType;
}) => ({
  id,
  uniqueId,
  image,
  special: true,
  state: "hidden"
});

const assembleMemories = (memories: MemoryType[]) =>
  memories.map((m) => Memory(m));
const assemblePowerups = (powerups: PowerUpType[]) =>
  powerups.map((p) => PowerUp(p));
const assembleTiles = (
  memories: MemoryType[],
  powerups: PowerUpType[]
): TileType[] => {
  const doubled = duplicate(memories);
  return shuffle([...doubled, ...powerups]);
};

const Story = ({ name, tiles, events }: StoryType) => ({
  name,
  tiles,
  events
});

const Level = (story: StoryType, level: number, difficulty: number) => ({
  story,
  level,
  difficulty
});
