import React from "react";
import { TitleProps } from "./type";
const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  const splitTitle = (title: string) => {
    const lettArray = title.split("O");
    lettArray.splice(1, 0, "O");
    return lettArray;
  };
  splitTitle(title);
  return (
    <header className={`Header`}>
      <h1 className={`title`}>{title}</h1>
      <h4 className={`subtitle`}>{subtitle}</h4>
    </header>
  );
};

export { Title };
