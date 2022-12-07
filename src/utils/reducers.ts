import { useEffect, useReducer, useState } from "react";
import { Memory } from "../components/Game/data/L1";
import { GridState } from "../components/Game/PlayField/Grid/TileGrid";

interface ReducerDispatch {
  type: string;
  id: string;
  uniqueId: string;
}

const dispatchGuess = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "guess",
  id: id,
  uniqueId: uniqueId
});

const checkSolved = (images: Memory[]): number =>
  images.filter((img) => img.state === "show").length;

const actionCardFlip = (
  state: GridState,
  dispatch: ReducerDispatch
): GridState => {
  const { turn, images, previousId, previousUnique } = state;
  const { id, uniqueId } = dispatch;
  if (previousUnique === uniqueId) {
    return { ...state, turn: 2, previousId: id, previousUnique: uniqueId };
  }
  if (checkSolved(images) === images.length)
    return { ...state, turn: "solved" };
  if (turn === 1) {
    return {
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
        images: images.map((img) =>
          img.id === id ? { ...img, state: "solved" } : img
        ),
        turn: 1,
        previousId: undefined,
        previousUnique: undefined
      };
    } else
      return {
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
      guess: actionCardFlip
    };
    return actions[type](state, { id, uniqueId, state });
  }

  return useReducer(gridReducer, { images: images, turn: 1 });
};

export { dispatchGuess, useGridReducer };
