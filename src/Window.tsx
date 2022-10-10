import React, { useEffect, useState } from "react";
import KeyHandler from "./utils/keyHandler";
import { Intro } from "./components/Menu/Intro";
import { Instruction } from "./components/Menu/Instruction";
import Game from "./Game";

const GameDetails = {
  title: "MNEMONICA",
  subtitle: `mnemosyne's trial`,
};

const Window: React.FC = () => {
  const [windowState, setWindowState] = useState({
    windowSize: [900, 600],
    intro: true,
    events: new KeyHandler(),
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handleEvent(e);
    });
  });

  const begin = () => {
    setWindowState({
      ...windowState,
      intro: false,
    });
    document.removeEventListener("keydown", (e) => {
      handleEvent(e);
    });
  };

  const handleEvent = (e: any) => {
    const action = windowState.events.typeInput(e);
    const options = {
      begin: begin(),
      down: "",
      pause: "",
    };
    return action !== undefined ? options[action] : "";
  };

  return (
    <article
      style={{
        width: `${windowState.windowSize[0]}px`,
        height: `${windowState.windowSize[1]}px`,
      }}
      className="Window"
    >
      {windowState.intro ? (
        <>
          <Intro title={GameDetails.title} subtitle={GameDetails.subtitle} />
          <Instruction />
        </>
      ) : (
        <Game />
      )}
    </article>
  );
};

export { Window };
