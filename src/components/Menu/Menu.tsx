import React, { useEffect } from "react";

const Menu = ({ pause }: any) => {
  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " " ? pause("game") : console.log(e.key);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return <div>Menu</div>;
};

export default Menu;
