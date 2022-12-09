import { MemoryType, PowerUpType } from "./types";

const Memory = ({ image, state }: MemoryType) => ({
  id: 1,
  uniqueId: 2,
  image,
  state
});

const PowerUp = ({ id, uniqueId, image, state, special }: PowerUpType) => ({
  id,
  uniqueId,
  image,
  state,
  special
});
const Story = () => {};

const Level = (images: MemoryType[]) => ({
  images: images.map((img) => Object.freeze(img))
});
