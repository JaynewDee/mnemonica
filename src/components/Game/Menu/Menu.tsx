import React, { useEffect, Fragment, useRef } from "react";
import { createPortal } from "react-dom";

const menuRoot = document.getElementById("menu-root");

const Menu = ({ pause }: any) => {
  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " "
        ? pause("game")
        : e.key === "Escape"
        ? window.location.reload()
        : console.log(e.key);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const MenuElement = () => (
    <div className="menu">
      <h2 className="paused">Paused</h2>
      <h4>Press SPACEBAR to resume</h4>
      <h5>Press ESCAPE to quit</h5>
    </div>
  );

  return (
    <Fragment>{createPortal(MenuElement(), menuRoot as HTMLElement)}</Fragment>
  );
};

export default Menu;