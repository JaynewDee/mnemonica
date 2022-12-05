const shuffle = (array: any) =>
  array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: any }) => value);

const forget = (cardArray: any) => shuffle(duplicate(cardArray));

const duplicate = (array: any) => [...array, ...array];

export { duplicate, forget, shuffle };
