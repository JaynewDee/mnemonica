import { useEffect, useReducer, useState } from "react";
import { Memory } from "../components/Game/data/L1";
import { L2 } from "../components/Game/data/L2";
import { GridState } from "../components/Game/PlayField/Grid/TileGrid";
import { shuffle } from "./memories";

interface ReducerDispatch {
  type: string;
  id?: string;
  uniqueId?: string;
}

const dispatchGuess = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "guess",
  id: id,
  uniqueId: uniqueId
});

const actionLevelUp = (state: GridState) => ({
  ...state,
  images: shuffle(L2.images),
  solved: 0,
  turn: 1,
  previousId: undefined,
  previousUnique: undefined
});

const actionCardFlip = (
  state: GridState,
  dispatch: ReducerDispatch
): GridState => {
  const { turn, images, previousId, previousUnique } = state;
  const { id, uniqueId } = dispatch;
  if (uniqueId === "powerup1") {
    return {
      ...state,
      images: images.map((img) =>
        img.uniqueId === "powerup1" ? { ...img, state: "claimed" } : img
      ),
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
  function gridReducer(
    state: GridState,
    { type, id, uniqueId }: ReducerDispatch
  ) {
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

export { dispatchGuess, useGridReducer };
