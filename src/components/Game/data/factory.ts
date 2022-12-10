import { MemoryType, PowerUpType, StoryType, TileType } from "./types";
import { nanoid } from "nanoid";
import { IconType } from "react-icons";
import { memoriesL1, powerupsL1 } from "./data";

const shuffle = (array: TileType[]) =>
  array
    .map((value: TileType) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: TileType }) => value);

const duplicate = (memories: TileType[]) => [
  ...memories.map((mem) => Object.freeze(mem)),
  ...memories.map((mem) => Object.freeze(mem))
];

const partial = () => ({
  uniqueId: nanoid(),
  state: "hidden"
});

const Memory = ({ id, image }: { id: string; image: IconType }) => ({
  id,
  image,
  ...partial()
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

const assembleTiles = (memories: MemoryType[], powerups: PowerUpType[]) => {
  const doubled = assembleMemories(duplicate(memories));

  return shuffle([...doubled, ...assemblePowerups(powerups)]);
};

const Story = ({ id, name, tiles, events }: StoryType) => ({
  id,
  name,
  tiles,
  events
});

const Level = (story: StoryType, level: number, difficulty: number) => ({
  story,
  level,
  difficulty
});

const LVL1TILES = assembleTiles(
  // @ts-ignore
  memoriesL1,
  powerupsL1
);
const Story1 = {
  id: "1",
  name: "Red Summer",
  tiles: LVL1TILES,
  events: ["", ""]
};
const LVL1 = Level(Story(Story1), 1, 1);

export { LVL1 };
