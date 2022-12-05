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

  const setSize = (size: [number, number]) =>
    setWindowState((prev) => {
      return {
        ...prev,
        windowSize: size
      };
    });

  useEffect(() => {
    const begin = () => {
      setWindowState(() => {
        return {
          ...windowState,
          intro: false
        };
      });
    };
    const onKeyDown = (e: any) =>
      e.key === " " ? begin() : console.log(e.key);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [windowState]);

  return (
    <article
      style={{
        width: `${windowState.windowSize[0]}px`,
        height: `${windowState.windowSize[1]}px`
      }}
      className="Window"
    >
      {windowState.intro ? (
        <Intro title={META.title} subtitle={META.subtitle} />
      ) : (
        <div></div>
      )}
    </article>
  );
};
export { Window };
