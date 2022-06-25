import React, { useEffect } from "react";
import Pause from "./Pause";
import { MenuProps } from "./type";
const Menu: React.FC<MenuProps> = ({}) => {
  console.log(`Menu component mounted`);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log(e);
    });
  });
  return (
    <>
      <section onKeyDown={(e) => {}} className="Menu">
        <h3
          style={{ letterSpacing: `3px`, fontSize: `1.33rem` }}
        >{`  |   MENU   |  `}</h3>
        <Pause />
      </section>
    </>
  );
};

export default Menu;
