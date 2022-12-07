import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState
} from "react";
import { Memory } from "../components/Game/data/L1";
import { L2 } from "../components/Game/data/L2";
import { GridState } from "../components/Game/PlayField/Grid/TileGrid";
import { shuffle } from "./memories";

export interface ReducerDispatch {
  type: string;
  id: string;
  uniqueId: string;
  updateScore: Dispatch<SetStateAction<number>>;
}

const dispatchGuess = (
  id: string,
  uniqueId: string,
  updateScore: Dispatch<SetStateAction<number>>
): ReducerDispatch => ({
  type: "guess",
  id: id,
  uniqueId: uniqueId,
  updateScore: updateScore
});

const actionLevelUp = (state: GridState) => ({
  ...state,
  images: shuffle(L2.images),
  solved: 0,
  turn: 1,
  previousId: undefined,
  previousUnique: undefined,
  type: "updateGrid"
});

const claimPowerup = (images: Memory[]) =>
  images.map((img) =>
    img.id === "powerup" ? { ...img, state: "claimed" } : img
  );
const actionCardFlip = (state: GridState, dispatch: any): GridState => {
  const { turn, images, previousId, previousUnique } = state;
  const { id, uniqueId } = dispatch;
  if (id === "powerup") {
    return {
      ...state,
      images: claimPowerup(images),
      score: state.score * 2
    };
  }
  if (previousUnique === uniqueId) {
    return { ...state, turn: 2, previousId: id, previousUnique: uniqueId };
  }

  if (turn === 1) {
    return {
      ...state,
      images: images.map((img) =>
        img.uniqueId === uniqueId
          ? {
              ...img,
              state: "show"
            }
          : img
      ),
      turn: 2,
      previousId: id,
      previousUnique: uniqueId
    };
  } else if (turn === 2) {
    if (previousId === id) {
      return {
        ...state,
        images: images.map((img) =>
          img.id === id ? { ...img, state: "solved" } : img
        ),
        turn: 1,
        previousId: undefined,
        previousUnique: undefined,
        solved: state.solved + 1
      };
    } else
      return {
        ...state,
        images: images.map((img) =>
          img.id === previousId ? { ...img, state: "hidden" } : img
        ),
        turn: 1,
        previousId: undefined,
        previousUnique: undefined
      };
  }
  return state;
};

const useGridReducer = (images: Memory[]) => {
  function gridReducer(state: GridState, { type, id, uniqueId }: any) {
    const actions: any = {
      guess: actionCardFlip,
      updateGrid: actionLevelUp
    };
    return actions[type](state, { id, uniqueId, state });
  }

  return useReducer(gridReducer, {
    images: images,
    turn: 1,
    solved: 0,
    score: 0
  });
};

const useLvlReducer = (state: GridState, newLevel: number[]) => {
  const actionSetLevel = (state: any, newLevel: number[]) => ({
    ...state,
    level: newLevel
  });
  function lvlReducer(state: GridState, newLevel: number[]) {
    const actions: any = {
      set: actionSetLevel
    };
    return actions["set"](state, newLevel);
  }

  return useReducer(lvlReducer, {
    ...state,
    level: newLevel
  });
};
export { dispatchGuess, actionLevelUp, useGridReducer, useLvlReducer };
