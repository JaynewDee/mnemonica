import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { memories } from "../data/fourBy";
import { forget } from "../../utils/forget";
import { shuffle } from "../../utils/shuffle";
import { IconContext, IconType } from "react-icons";

const GridFrame: React.FC = () => {
  const [gridState, setGrid] = useState<any>({
    images: [],
    loading: true,
  });
  useEffect(() => {
    const forgotten = forget(memories);
    setGrid(forgotten);
  }, []);
  return (
    <IconContext.Provider value={{ color: "rgba(15,15,15,.9)", size: "3rem" }}>
      {gridState.loading ? (
        <p>Loading ...</p>
      ) : (
        <article className="four-by">
          {gridState.map((memory: { image: IconType }, idx: number) => {
            return <Cell key={idx} img={memory.image} idx={idx} />;
          })}
        </article>
      )}
    </IconContext.Provider>
  );
};

export default GridFrame;
