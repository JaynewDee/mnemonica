import { WindowProps, WindowState } from "./type";
import React, { useEffect, useState } from "react";
import { Intro } from "./components/Intro/Intro";
const META = {
  title: `MNEMONICA`,
  subtitle: `mnemosyne's trial`
};

const Window = () => {
  const [windowState, setWindowState] = useState({
    windowSize: [900, 600],
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
    >
      <Intro title={META.title} subtitle={META.subtitle} />
    </article>
  );
};
export { Window };
