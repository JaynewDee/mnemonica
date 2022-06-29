import { FaBeer } from "react-icons/fa";

const nourish = (imagesArray: any, powerups: any) => {
  const newArray = [...imagesArray, ...powerups];
  console.log(newArray);
  return newArray;
};

export { nourish };
