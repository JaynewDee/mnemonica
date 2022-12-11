import { useReducer } from "react";
import { MemoryType } from "../components/Game/data/types";

import { GridState } from "../components/Game/PlayField/Grid/TileGrid";
import { LVL3 } from "../components/Game/data/factory";

export interface ReducerDispatch {
  type: string;
  id?: string;
  uniqueId?: string;
}

const dispatchGuess = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "guess",
  id,
  uniqueId
});
const actionResetWrong = (state: any): any => ({
  ...state,
  images: state.images.map((img: any) =>
    img.state === "animated" ? (img.state = "hidden") : img
  ),
  type: "resetWrong"
});
const actionLevelUp = (state: any): any => ({
  ...state,
  images: LVL3.story.tiles.slice(),
  solved: 0,
  turn: 1,
  previousId: undefined,
  previousUnique: undefined,
  type: "updateGrid"
});

const actionCardFlip = (
  state: GridState,
  dispatch: ReducerDispatch
): GridState => {
  const { turn, images, previousId, previousUnique } = state;
  const { id, uniqueId } = dispatch;
  if (uniqueId === "doubleScore") {
    return {
      ...state,
      images: images.map((img) =>
        img.uniqueId === "doubleScore" ? { ...img, state: "claimed" } : img
      )
    };
  }
  if (uniqueId === "doubleScore2") {
    return {
      ...state,
      images: images.map((img) =>
        img.uniqueId === "doubleScore2" ? { ...img, state: "claimed" } : img
      )
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
              state: "shown"
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
          img.uniqueId === previousUnique || img.uniqueId === uniqueId
            ? { ...img, state: "animated" }
            : img
        ),
        turn: 1,
        previousId: undefined,
        previousUnique: undefined
      };
  }
  return state;
};

const useGridReducer = (images: MemoryType[]) => {
  const actionSetLevel = (state: any, newLevel: number[]) => ({
    ...state,
    level: newLevel
  });
  function gridReducer(
    state: GridState,
    { type, id, uniqueId }: ReducerDispatch
  ) {
    const actions: any = {
      guess: actionCardFlip,
      updateGrid: actionLevelUp,
      resetWrong: actionResetWrong,
      levelUp: actionSetLevel
    };
    return actions[type](state, { id, uniqueId });
  }

  return useReducer(gridReducer, {
    images: images,
    turn: 1,
    solved: 0,
    score: 0
  });
};

const useLvlReducer = (state: GridState, newLevel: number[]) => {
  function lvlReducer(state: GridState, newLevel: number[]) {
    const actions: any = {};
    return actions["set"](state, newLevel);
  }

  return useReducer(lvlReducer, {
    ...state,
    level: newLevel
  });
};

export {
  dispatchGuess,
  actionLevelUp,
  actionResetWrong,
  useGridReducer,
  useLvlReducer
};
