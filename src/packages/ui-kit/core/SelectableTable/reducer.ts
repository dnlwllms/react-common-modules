import { ReducerAction, ReducerState } from "./types";

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "setStartPoint": {
      state.startPoint = action.payload;
      state.currentPoint = action.payload;
      state.endPoint = undefined;
      state.isActive = true;

      return { ...state };
    }
    case "setCurrentPoint": {
      if (
        state.currentPoint &&
        action.payload &&
        (state.currentPoint[0] !== action.payload[0] ||
          state.currentPoint[1] !== action.payload[1])
      ) {
        state.currentPoint = action.payload;

        return { ...state };
      }

      return state;
    }
    case "setEndPoint": {
      state.endPoint = state.currentPoint || action.payload;
      state.currentPoint = undefined;
      state.isActive = false;

      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
