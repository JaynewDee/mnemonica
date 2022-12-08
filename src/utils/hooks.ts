import { useEffect, useState } from "react";

export const useScoreState = (score: number) => {
  const [scoreState, setScoreState] = useState(0);

  const newScore = (oldScore: number, newScore: number): number =>
    oldScore + newScore;

  useEffect(() => {
    setScoreState(newScore(scoreState, score));
  }, [score, scoreState]);

  return [scoreState, setScoreState];
};
