import { IconType } from "react-icons";

type MemoryType = {
  id: string;
  uniqueId: string;
  image: IconType;
  state: string;
};
interface Special {
  special: boolean;
}
type PowerUpType = MemoryType & Special;

type TileType = MemoryType | PowerUpType;

interface StoryType {
  id: string;
  name: string;
  tiles: MemoryType[];
  events: string[];
}

export { MemoryType, PowerUpType, StoryType, TileType };
