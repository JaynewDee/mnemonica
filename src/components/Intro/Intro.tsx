import React, { useEffect } from "react";
import { Instruction } from "./Instruction";
import { Title } from "./Title";
import { IntroProps } from "./type";
const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
  return (
    <section className="intro">
      <Title title={title} subtitle={subtitle} />
      <Instruction />
    </section>
  );
};

export { Intro };
