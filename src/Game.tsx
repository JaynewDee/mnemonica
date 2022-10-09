import React, { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid";
import { forgottenZeroZero } from "./utils/forgetMemories";
import { nourish } from "./utils/nourish";
import { shuffle } from "./utils/forgetMemories";
import { FaBeer } from "react-icons/fa";
interface GameProps {}
const powerups = [
  {
    image: FaBeer,
    class: `cell`,
    pairId: `boost`,
    uniqueId: `boost`,
  },
];
const nourished = nourish(forgottenZeroZero, powerups);
const Game: React.FC<GameProps> = () => {
  const [gameState, setGameState] = useState({
    level: [0, 0],
    images: shuffle(nourished),
  });
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        setMenuState(!menuState);
      }
    });
  }, []);

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
