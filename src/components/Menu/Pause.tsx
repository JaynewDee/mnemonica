import React from "react";
import { PauseProps } from "./type";
const Pause: React.FC<PauseProps> = ({ resume }) => {
  return (
    <>
      <h3
        style={{ letterSpacing: `3px`, fontSize: `1.33rem` }}
      >{`  |   MENU   |  `}</h3>
      <div className="menu-buttons">
        <button
          onKeyDown={(e) => (e.key === "Space" ? resume() : null)}
          onClick={(e) => resume()}
        >
          RESUME
        </button>
        <button>SETTINGS</button>
        <button onClick={(e) => window.location.reload()}>QUIT</button>
      </div>
    </>
  );
};

export default Pause;
