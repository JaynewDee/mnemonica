import React from "react";
import { PauseProps } from "./type";
const Pause: React.FC<PauseProps> = ({}) => {
  console.log(`Pause component mounted`);
  return (
    <>
      <div className="menu-buttons">
        <button autoFocus={true} className="resume-btn">
          RESUME
        </button>
        <button>SETTINGS</button>
        <button onClick={(e) => window.location.reload()}>QUIT</button>
      </div>
    </>
  );
};

export default Pause;
