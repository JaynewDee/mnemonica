import { memoriesOneZero } from "../components/data/fourBy";
import { memoriesZeroZero } from "../components/data/threeBy";

function index(array: any) {
  const uniques = array.map((item: any) => {
    item.uniqueId = Math.round(Math.random() * 10000);
    return item;
  });
  return uniques;
}

function forget(cardArray: any) {
  const indexed = index(cardArray);
  const amnesia = shuffle(indexed);
  return amnesia;
}

export function shuffle(array: any) {
  const shuffled = array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: any }) => value);
  return shuffled;
}

const forgottenZeroZero = forget(memoriesZeroZero);
const forgottenOneZero = forget(memoriesOneZero);
export { forgottenZeroZero, forgottenOneZero };
