import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cell from "./Cell";
import { IconContext } from "react-icons";
import { gridSize } from "../../../../utils/memories";
import { L1, Memory } from "../../data/L1";
import { useGridReducer } from "../../../../utils/reducers";
import Menu from "../../Menu/Menu";

export interface GridState {
  images: Memory[];
  turn: number | "solved";
  previousId: string | undefined;
  previousUnique: string | undefined;
  solved: number;
  score: number;
}
interface GridProps {
  isPaused: boolean;
  level: number[];
  levelUp: any;
  updateScore: Dispatch<SetStateAction<any>>;
}

const TileGrid: React.FC<GridProps> = ({ isPaused, level, levelUp }) => {
  const [grid, dispatch] = useGridReducer(L1.images);
  const [isSolved, setIsSolved] = useState(false);
  const dimension = `repeat(${gridSize(grid.images.length)}, 1fr)`;
  const containerStyles = {
    gridTemplateColumns: dimension,
    gridTemplateRows: dimension,
    display: isPaused ? "none" : "grid"
  };

  const handleLvlChange = () => {
    dispatch({ type: "updateGrid" });
    setIsSolved(false);
    levelUp();
  };
  const getPowerups = (images: Memory[]) =>
    images.filter((img) => img.uniqueId === "powerup");
  useEffect(() => {
    const maxSolutions =
      grid.images.filter((img: Memory) => img.uniqueId !== "powerup").length /
      2;
    if (grid.solved >= maxSolutions) setIsSolved(true);
  }, [grid]);
  return (
    <>
      <IconContext.Provider value={{ color: "rgba(170,0,0, .75)" }}>
        {isSolved && !isPaused ? (
          <>
            <h3>SOLVED</h3>{" "}
            <button onClick={handleLvlChange}>PROCEED {">"}</button>
          </>
        ) : (
          <></>
        )}
        <article style={containerStyles} className="grid-container">
          {grid.images.map((item: Memory) => (
            <Cell
              key={item.uniqueId}
              data={item}
              gridDispatch={dispatch}
              turn={grid.turn}
            />
          ))}
        </article>
      </IconContext.Provider>
      {isPaused ? <Menu /> : <></>}
    </>
  );
};

export default TileGrid;
