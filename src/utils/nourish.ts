const nourish = (imageTiles: any, powerups: any) => {
  const newArray = [...imageTiles, ...powerups];
  return newArray;
};

export { nourish };
