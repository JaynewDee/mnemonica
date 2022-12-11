import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useScoreState = (
  score: number
): [number, Dispatch<SetStateAction<number>>] => {
  const [scoreState, setScoreState] = useState<number>(0);

  const newScore = (oldScore: number, newScore: number): number =>
    oldScore + newScore;

  useEffect(() => {
    setScoreState(newScore(scoreState, score));
  }, [score, scoreState]);

  return [scoreState, setScoreState];
};
