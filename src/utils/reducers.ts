import React from "react";
import { GridState } from "../components/Game/PlayField/Grid/TileGrid";

interface ReducerDispatch {
  type: string;
  id: number;
  uniqueId: number;
}

const dispatchCardFlip = (id: string, uniqueId: string) => ({
  type: "guess",
  id: parseInt(id),
  uniqueId: parseInt(uniqueId)
});

const dispatchWrong = (id: string, uniqueId: string) => ({
  type: "wrong",
  id: parseInt(id),
  uniqueId: parseInt(uniqueId)
});

const dispatchCorrect = (id: string, uniqueId: string) => ({
  type: "correct",
  id: parseInt(id),
  uniqueId: parseInt(uniqueId)
});

const actionCardFlip = (state: GridState) => state;
const actionWrong = (state: GridState) => state;
const actionCorrect = (state: GridState) => state;

function gridReducer(state: GridState, action: ReducerDispatch) {
  const actions: any = {
    guess: actionCardFlip,
    wrong: actionWrong,
    correct: actionCorrect
  };
  return actions[action.type](state);
}
export { dispatchCardFlip, dispatchWrong, dispatchCorrect, gridReducer };
