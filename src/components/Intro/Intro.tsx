import React from "react";
import { Instruction } from "./Instruction";
import { Title } from "./Title";
import { MenuProps } from "./type";
const Intro: React.FC<MenuProps> = ({ title, subtitle }) => {
  return (
    <section className="intro">
      <Title title={title} subtitle={subtitle} />
      <Instruction />
    </section>
  );
};

export { Intro };
