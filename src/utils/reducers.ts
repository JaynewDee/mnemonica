import { GUESS, MATCH, RESET_WRONG, COMPLETED } from "./actions";

const gridReducer = (state: any, { type, payload }: any) => {
  const matchId = parseInt(payload);
  switch (type) {
    case GUESS:
      {
        const guess = payload[2];
        const uniqueId = parseInt(payload[0]);
        const updated = state.images.map((img: any) => {
          if (img.uniqueId === uniqueId) {
            img.class = `cell-flipped`;
          }
          return img;
        });
        if (guess === `boost`) {
          const updated = state.images.map((img: any) => {
            if (img.uniqueId === `boost`) {
              img.class = `boost-flipped`;
            } else if (img.class === `cell-flipped`) {
              img.class = `cell`;
            }
            return img;
          });
          return {
            ...state,
            first: "",
            second: "",
            turn: 1,
            images: updated,
          };
        }
        if (state.turn === 1) {
          return {
            ...state,
            first: guess,
            turn: 2,
            images: updated,
          };
        } else if (state.turn === 2) {
          return {
            ...state,
            second: guess,
            turn: 3,
            images: updated,
          };
        }
      }
      break;
    case MATCH: {
      const updated = state.images.map((img: any) => {
        if (img.pairId === matchId) {
          img.class = `cell-solved`;
        }
        return img;
      });

      return {
        ...state,
        turn: 1,
        images: updated,
        solved: state.solved + 1,
      };
    }

    case RESET_WRONG: {
      const reset = state.images.map((img: any) => {
        if (img.class === `cell-flipped`) {
          img.class = `cell`;
        }
        return img;
      });

      return {
        ...state,
        turn: 1,
        images: reset,
        vitality: state.vitality - payload,
      };
    }
    case COMPLETED: {
      const refreshed = state.images.map((img: any) => {
        img.class = `cell`;
        return img;
      });
      return {
        images: refreshed,
        turn: 1,
        first: "",
        second: "",
        solved: 0,
        ...state,
      };
    }
  }
};
export { gridReducer };
