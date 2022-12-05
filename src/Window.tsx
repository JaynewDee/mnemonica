import { WindowProps, WindowState } from "./type";
import React, { useEffect, useState } from "react";
import { Intro } from "./components/Menu/Intro";
import { Instruction } from "./components/Menu/Instruction";

const Window = () => {
  const [windowState, setWindowState] = useState({
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    menu: true,
    settings: {
      level: [0, 0],
      rehabilitation: false
    }
  });

  const focusWindow = () => {
    console.log(`focusWindow fired.`);
  };

  const setSize = (size: [number, number]) =>
    setWindowState((prev) => {
      return {
        ...prev,
        windowSize: size
      };
    });

  const begin = () => {
    setWindowState(() => {
      return {
        ...windowState,
        intro: false
      };
    });
  };

  return (
    <article
      onKeyDown={(e) => {}}
      style={{
        width: `${windowState.windowSize[0]}px`,
        height: `${windowState.windowSize[1]}px`
      }}
      className="Window"
    ></article>
  );
};
export { Window };
