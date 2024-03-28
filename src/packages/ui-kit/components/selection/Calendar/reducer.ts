import { setMonth, setYear } from "date-fns";
import { CalendarReducerAction, CalendarReducerState } from "./types";

export const reducer = (
  state: CalendarReducerState,
  action: CalendarReducerAction
) => {
  switch (action.type) {
    case "changeType": {
      state.type = action.payload;

      return { ...state };
    }
    case "changeMonth": {
      state.type = "date";
      state.date = setMonth(state.date, action.payload);

      return { ...state };
    }
    case "changeYear": {
      state.type = "month";
      state.date = setYear(state.date, action.payload);

      return { ...state };
    }

    case "changeDate": {
      state.date = action.payload;

      return { ...state };
    }
  }
};
