import { useReducer } from "react";

import {
  addDays,
  addMonths,
  getDaysInMonth,
  lastDayOfMonth,
  startOfMonth,
} from "date-fns";

import { reducer } from "./reducer";

export const useCalendar = (date: Date = new Date()) => {
  const [state, dispatch] = useReducer(reducer, {
    date,
    type: "date",
  });

  const prevMonth = addMonths(state.date, -1);
  const prevMonthLastDate = lastDayOfMonth(prevMonth);

  const startDate = startOfMonth(state.date);
  const startDay = startDate.getDay();

  const lastDate = lastDayOfMonth(state.date);
  const lastDay = lastDate.getDay();

  const daysInMonth = getDaysInMonth(state.date);

  const prevDaysLength = startDay % 7;
  const nextDaysLength = 6 - lastDay;

  const dates: [Date[], Date[], Date[]] = [
    Array.from({ length: prevDaysLength }).map((_, index) => {
      return addDays(prevMonthLastDate, index - prevDaysLength + 1);
    }),
    Array.from({ length: daysInMonth }).map((_, index) => {
      return addDays(startDate, index);
    }),
    Array.from({ length: nextDaysLength }).map((_, index) => {
      return addDays(lastDate, index + 1);
    }),
  ];

  return {
    state,
    dispatch,
    dates,
  };
};
