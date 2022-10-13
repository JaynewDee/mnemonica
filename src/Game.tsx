import React, { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid";
import { forgottenZeroZero } from "./utils/forgetMemories";
import { shuffle } from "./utils/forgetMemories";
interface GameProps {}

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
});

const Game: React.FC<GameProps> = () => {
  const [gameState, setGameState] = useState({
    level: [1, 1],
    images: shuffle(forgottenZeroZero),
  });
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <Grid
        level={gameState.level}
        images={gameState.images}
        menuState={menuState}
      />
    </>
  );
};

export default Game;
