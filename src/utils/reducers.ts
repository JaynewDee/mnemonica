import { useReducer } from "react";
import { MemoryType } from "../components/Game/data/types";

import { GridState } from "../components/Game/PlayField/Grid/TileGrid";
import { LVL3 } from "../components/Game/data/factory";

export interface ReducerDispatch {
  type: string;
  id?: string;
  uniqueId?: string;
  newLevel?: number[];
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

const tilesByLevel = (level: number) =>
  level === 1
    ? LVL3.story.tiles.slice()
    : level === 2
    ? LVL3.story.tiles.slice()
    : LVL3.story.tiles.slice();

const useGridReducer = (images: MemoryType[]) => {
  const actionLevelUp = (state: any, newLevel: number[]) => ({
    ...state,
    images: tilesByLevel(newLevel[0])
  });
  function gridReducer(
    state: GridState,
    { type, id, uniqueId, newLevel }: ReducerDispatch
  ) {
    const actions: any = {
      guess: actionCardFlip,
      updateGrid: actionLevelUp,
      resetWrong: actionResetWrong,
      levelUp: actionLevelUp
    };
    return type === "levelUp"
      ? actions[type](state, { newLevel })
      : actions[type](state, { id, uniqueId });
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
    return actions["set"](state);
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
