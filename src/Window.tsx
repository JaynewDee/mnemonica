import { WindowState } from "./type";
import { useState } from "react";
import DisplaySwitch from "./components/DisplaySwitch";

const Window = () => {
  const [windowState, setWindowState] = useState<WindowState>({
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    windowSize: [1280, 720],
    currentDisplay: "intro",
    settings: {
      level: [0, 0],
      rehabilitation: false
    }
  });

  const pause = (displayState: string) => {
    setWindowState(() => {
      return {
        ...windowState,
        currentDisplay: displayState
      };
    });
  };

  return (
    <article
      style={{
        width: `${windowState.windowSize[0]}px`,
        height: `${windowState.windowSize[1]}px`
      }}
      className="Window"
    >
      {DisplaySwitch(windowState, pause)}
    </article>
  );
};
export { Window };
