import React from "react";
import { TitleProps } from "./type";
const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <header className="Header">
      <h1 className="title">{title}</h1>
      <h4 className="subtitle">{subtitle}</h4>
    </header>
  );
};

export { Title };
