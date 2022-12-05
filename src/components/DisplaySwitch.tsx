import React from "react";
import { Intro } from "./Intro/Intro";
import { WindowState } from "../type";
import Menu from "./Game/Menu/Menu";
import Game from "./Game/Game";

const DisplaySwitch = (windowState: WindowState, pause: Function) => {
  const { title, subtitle, currentDisplay } = windowState;

  return currentDisplay === "intro" ? (
    <Intro title={title} subtitle={subtitle} start={pause} />
  ) : currentDisplay === "game" ? (
    <Game />
  ) : (
    <div>Future Display</div>
  );
};

export default DisplaySwitch;
