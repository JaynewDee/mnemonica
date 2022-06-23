import React from "react";
import { Title } from "./Title";
import { IntroProps } from "./type";
const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
  return (
    <section className="Intro">
      <Title title={title} subtitle={subtitle} />
    </section>
  );
};

export { Intro };
