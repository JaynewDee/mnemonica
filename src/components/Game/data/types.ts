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

type CellType = MemoryType | PowerUpType;

interface StoryType {
  id: string;
  name: string;
  images: MemoryType[];
  events: string[];
}

export { MemoryType, PowerUpType };
