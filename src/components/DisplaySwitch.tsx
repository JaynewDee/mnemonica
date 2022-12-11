import { Intro } from "./Intro/Intro";
import { WindowState } from "../type";
import Game from "./Game/Game";
import { Dispatch, SetStateAction } from "react";

const DisplaySwitch = (
  windowState: WindowState,
  pause: Function,
  setWindowSize: Dispatch<SetStateAction<any>>
) => {
  const { title, subtitle, currentDisplay } = windowState;

  return currentDisplay === "intro" ? (
    <Intro title={title} subtitle={subtitle} start={pause} />
  ) : currentDisplay === "game" ? (
    <Game setWindowSize={setWindowSize} />
  ) : (
    <div>Future Display</div>
  );
};

export default DisplaySwitch;
