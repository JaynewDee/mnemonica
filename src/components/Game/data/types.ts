import { IconType } from "react-icons";

type MemoryType = {
  id: string;
  image: IconType;
  uniqueId: string;
  state: string;
};
type Special = {
  special: boolean;
};
type PowerUpType = MemoryType & Special;
type TileType = MemoryType | PowerUpType;

interface StoryType {
  id: string;
  name: string;
  tiles: MemoryType[];
  events: string[];
}

export { MemoryType, PowerUpType, StoryType, TileType };
