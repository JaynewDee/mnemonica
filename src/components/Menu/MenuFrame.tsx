import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Pause from "./Pause";
import { MenuProps } from "./type";

const menuRoot = document.getElementById("menu-root");
const Menu: React.FC<MenuProps> = () => {
  console.log(`Menu component mounted`);
  const [container, setContainer] = useState<any>(menuRoot);
  return ReactDOM.createPortal(
    <>
      <section onKeyDown={(e) => {}} className="Menu">
        <h3
          style={{ letterSpacing: `3px`, fontSize: `1.33rem` }}
        >{`  |   MENU   |  `}</h3>
        <Pause />
      </section>
    </>,
    container
  );
};

export default Menu;
