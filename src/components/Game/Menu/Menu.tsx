import React, { useEffect, Fragment, useRef } from "react";
import { createPortal } from "react-dom";

const menuRoot = document.getElementById("menu-root");

const Menu = ({ pause }: any) => {
  useEffect(() => {
    const onKeyDown = (e: any) => (e.key === " " ? pause("game") : null);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <Fragment>
      {createPortal(<div className="menu">Menu</div>, menuRoot as HTMLElement)}
    </Fragment>
  );
};

export default Menu;
