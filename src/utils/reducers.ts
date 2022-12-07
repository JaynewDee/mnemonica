import { GridState } from "../components/Game/PlayField/Grid/TileGrid";

interface ReducerDispatch {
  type: string;
  id: string;
  uniqueId: string;
}

const dispatchCardFlip = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "guess",
  id: id,
  uniqueId: uniqueId
});

const dispatchWrong = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "wrong",
  id: id,
  uniqueId: uniqueId
});

const dispatchCorrect = (id: string, uniqueId: string): ReducerDispatch => ({
  type: "correct",
  id: id,
  uniqueId: uniqueId
});

const actionCardFlip = (
  state: GridState,
  { type, id, uniqueId }: ReducerDispatch
): GridState => ({
  images: [
    ...state.images.map((img) =>
      img.uniqueId === uniqueId
        ? {
            ...img,
            state: "show"
          }
        : img
    )
  ]
});
const actionWrong = (state: GridState) => state;
const actionCorrect = (state: GridState) => state;

function gridReducer(state: GridState, action: ReducerDispatch) {
  const actions: any = {
    guess: actionCardFlip,
    wrong: actionWrong,
    correct: actionCorrect
  };
  return actions[action.type](state, action);
}

export { dispatchCardFlip, dispatchWrong, dispatchCorrect, gridReducer };
