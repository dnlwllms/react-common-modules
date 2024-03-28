import { WidgetUIReducerAction, WidgetUIReducerState } from "./types";
import { getGridItemSize } from "./utils";

export const reducerInitialState: WidgetUIReducerState = {
  grid: [16, 8],

  isReady: false,
  isEditMode: false,

  width: 0,
  height: 0,

  gridItemSize: [0, 0],

  widgets: [],

  data: [],
};

export const reducer = (
  state: WidgetUIReducerState,
  action: WidgetUIReducerAction
) => {
  switch (action.type) {
    case "init": {
      state.isReady = typeof window !== "undefined";

      if (state.isReady && action.payload) {
        const { container, config } = action.payload;

        const rect = container.getBoundingClientRect();

        state.width = rect.width;
        state.height = rect.height;
        state.grid = config.grid;
        state.gridItemSize = getGridItemSize(
          [state.width, state.height],
          {
            padding: config.style?.padding,
            gap: config.style?.gap,
          },
          state.grid
        );
      }

      return { ...state };
    }

    case "setEditMode": {
      if (action.payload !== undefined) {
        state.isEditMode = action.payload;

        return { ...state };
      }
      break;
    }

    case "setGridItemsDOMRect": {
      state.gridItemsDOMRect = action.payload;

      return { ...state };
    }

    case "setSelectedWidget": {
      state.selectedWidget = action.payload;

      return { ...state };
    }

    case "setSelectedNewWidget": {
      state.selectedNewWidget = action.payload;

      return { ...state };
    }

    case "setHighlightInfo": {
      state.highlightInfo = action.payload;

      return { ...state };
    }

    case "addWidget": {
      if (action.payload) {
        const isExist = state.data.find(({ id }) => id === action.payload?.id);

        if (!isExist) {
          state.data = [...state.data, action.payload];
        }
      }

      return { ...state };
    }

    case "removeWidget": {
      const target = state.data.find(({ id }) => id === action.payload);
      if (target) {
        state.data = state.data.filter(({ id }) => id !== target.id);
      }

      return { ...state };
    }

    case "editWidgetGridCoordinate": {
      if (action.payload) {
        for (let index = 0; index < state.data.length; index++) {
          if (state.data[index].id === action.payload.id) {
            state.data[index].gridCoordinate = action.payload.gridCoordinate;
            break;
          }
        }
      }

      return { ...state };
    }
  }

  return state;
};
