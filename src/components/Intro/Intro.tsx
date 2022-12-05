import React, { useEffect } from "react";
import { Instruction } from "./Instruction";
import { Title } from "./Title";
import { IntroProps } from "./type";
const Intro: React.FC<IntroProps> = ({ title, subtitle, start }) => {
  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " " ? start("game") : console.log(e.key);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <section className="intro">
      <Title title={title} subtitle={subtitle} />
      <Instruction />
    </section>
  );
};

export { Intro };
