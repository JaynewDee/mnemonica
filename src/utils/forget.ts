import { duplicate } from "./duplicate";
import { shuffle } from "./shuffle";

const forget = (cardArray: any) => {
  const recall = duplicate(cardArray);
  const amnesia = shuffle(recall);

  return amnesia;
};

export { forget };
