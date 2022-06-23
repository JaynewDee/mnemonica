import React, { useEffect } from "react";
import Pause from "./Pause";
import { MenuProps } from "./type";
const Menu: React.FC<MenuProps> = ({ resume }) => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        resume();
      }
    });
  });
  return (
    <section
      onKeyDown={(e) => {
        if (e.key === "Space") {
          resume();
        }
      }}
      className="Menu"
    >
      <Pause resume={resume} />
    </section>
  );
};

export default Menu;
