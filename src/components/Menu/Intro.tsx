import React from "react";
import { Title } from "./Title";
import { MenuProps } from "./type";
const Intro: React.FC<MenuProps> = ({ title, subtitle }) => {
  return (
    <section className="Menu">
      <Title title={title} subtitle={subtitle} />
    </section>
  );
};

export { Intro };
