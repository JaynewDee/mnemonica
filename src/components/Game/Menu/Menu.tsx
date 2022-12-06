import React, { useEffect, Fragment, useRef } from "react";
import { createPortal } from "react-dom";

const menuRoot = document.getElementById("menu-root");

const Menu = ({ pause }: any) => {
  useEffect(() => {
    const onKeyDown = (e: any) => (e.key === " " ? pause("game") : null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const MenuElement = () => (
    <div className="menu">
      <h2>Paused</h2>
      <h4>Press SPACEBAR to resume</h4>
    </div>
  );

  return (
    <Fragment>{createPortal(MenuElement(), menuRoot as HTMLElement)}</Fragment>
  );
};

export default Menu;
