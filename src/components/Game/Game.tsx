import React, { useEffect } from "react";

const Game = ({ pause }: any) => {
  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === " " ? pause("menu") : console.log(e.key);
    const mountListener = () => window.addEventListener("keydown", onKeyDown);
    mountListener();
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return <div>Game</div>;
};

export default Game;
