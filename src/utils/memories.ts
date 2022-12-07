import { Memory } from "../components/Game/data/L1";

const shuffle = (array: Memory[]): Memory[] =>
  array
    .map((value: Memory) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: Memory }) => value);

const gridSize = (arrayLength: number) => String(Math.sqrt(arrayLength));

export { shuffle, gridSize };
