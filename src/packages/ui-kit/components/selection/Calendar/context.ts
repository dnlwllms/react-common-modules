import { Dispatch, createContext } from "react";

import { CalendarReducerAction, CalendarReducerState } from "./types";

export const CalendarStateContext = createContext<CalendarReducerState | null>(null);

export const CalendarDispatchContext =
  createContext<Dispatch<CalendarReducerAction> | null>(null);
