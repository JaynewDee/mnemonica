import React from "react";
import { Intro } from "./Intro/Intro";
import { WindowState } from "../type";

const DisplaySwitch = (windowState: WindowState) => {
  const { title, subtitle, currentDisplay } = windowState;

  return () =>
    currentDisplay === "intro" ? (
      <Intro title={title} subtitle={subtitle} />
    ) : currentDisplay === "menu" ? (
      <div>Menu</div>
    ) : currentDisplay === "game" ? (
      <div>Game</div>
    ) : (
      <div>Future Display</div>
    );
};

export default DisplaySwitch;
