import { WindowProps, WindowState } from "./type";
import React, { useEffect, useState } from "react";
import { Intro } from "./components/Intro/Intro";
import DisplaySwitch from "./components/DisplaySwitch";

const META = {};

const Window = () => {
  const [windowState, setWindowState] = useState<WindowState>({
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    windowSize: [900, 600],
    currentDisplay: "intro",
    settings: {
      level: [0, 0],
      rehabilitation: false
    }
  });

  const setSize = (size: [number, number]) =>
    setWindowState((prev) => {
      return {
        ...prev,
        windowSize: size
      };
    });

  const start = () => {
    setWindowState(() => {
      return {
        ...windowState,
        currentDisplay: "menu"
      };
    });
  };

  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " " ? start() : console.log(e.key);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return (
    <article
      style={{
        width: `${windowState.windowSize[0]}px`,
        height: `${windowState.windowSize[1]}px`
      }}
      className="Window"
    >
      {DisplaySwitch(windowState)()}
    </article>
  );
};
export { Window };
