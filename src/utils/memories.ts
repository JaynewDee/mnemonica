const shuffle = (array: any) => {
  return array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: any }) => value);
};

const forget = (cardArray: any) => {
  const recall = duplicate(cardArray);
  const amnesia = shuffle(recall);

  return amnesia;
};

const duplicate = (array: any) => {
  return [...array, ...array];
};

export { duplicate, forget, shuffle };
