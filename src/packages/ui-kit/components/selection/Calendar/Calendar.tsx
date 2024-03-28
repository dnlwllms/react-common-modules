import { Dispatch, FC, useContext } from "react";

import { addMonths, addYears, format } from "date-fns";

import {
  CalendarComponent,
  CalendarNavigationProps,
  CalendarReducerAction,
  CalendarReducerState,
} from "./types";
import CalendarStyledComponents from "./styled";
import { CalendarStateContext, CalendarDispatchContext } from "./context";

import {
  DoubleLeftSVG,
  DoubleRightSVG,
  LeftSVG,
  RightSVG,
} from "../../../icons/outlined/arrows";

import { useCalendar } from "./useCalendar";

const { SelectArea, DateArea, ArrowButtonGroup, ArrowButton } =
  CalendarStyledComponents;

const calendarHeaderDays = [
  {
    key: "sunday",
    label: "S",
  },
  {
    key: "monday",
    label: "M",
  },
  {
    key: "tuesday",
    label: "T",
  },
  {
    key: "wednesday",
    label: "W",
  },
  {
    key: "thursday",
    label: "T",
  },
  {
    key: "friday",
    label: "F",
  },
  {
    key: "saturday",
    label: "S",
  },
];

const Calendar: CalendarComponent = ({ date, children }) => {
  const { state, dispatch, dates } = useCalendar(date);

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children({ state, dispatch, dates, calendarHeaderDays })}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

const Navigation: FC<CalendarNavigationProps> = ({ type, onNavigate }) => {
  const state = useContext(CalendarStateContext) as CalendarReducerState;
  const dispatch = useContext(
    CalendarDispatchContext
  ) as Dispatch<CalendarReducerAction>;

  const handleArrowButtonClick = (date: Date) => {
    dispatch({
      type: "changeDate",
      payload: date,
    });

    if (onNavigate) {
      onNavigate(date);
    }
  };

  switch (type) {
    case "date": {
      return (
        <SelectArea>
          <ArrowButtonGroup>
            <ArrowButton
              onClick={() => handleArrowButtonClick(addYears(state.date, -1))}
            >
              <DoubleLeftSVG width={24} height={24} />
            </ArrowButton>
            <ArrowButton
              onClick={() => handleArrowButtonClick(addMonths(state.date, -1))}
            >
              <LeftSVG width={24} height={24} />
            </ArrowButton>
          </ArrowButtonGroup>
          <DateArea
            onClick={() => {
              dispatch({ type: "changeType", payload: "month" });
            }}
          >
            <span>{format(state.date, "yyyy")}년</span>
            <span>{format(state.date, "MM")}월</span>
          </DateArea>
          <ArrowButtonGroup>
            <ArrowButton
              onClick={() => handleArrowButtonClick(addMonths(state.date, 1))}
            >
              <RightSVG width={24} height={24} />
            </ArrowButton>
            <ArrowButton
              onClick={() => handleArrowButtonClick(addYears(state.date, 1))}
            >
              <DoubleRightSVG width={24} height={24} />
            </ArrowButton>
          </ArrowButtonGroup>
        </SelectArea>
      );
    }
    case "month": {
      return (
        <SelectArea>
          <ArrowButton
            onClick={() => handleArrowButtonClick(addYears(state.date, -1))}
          >
            <DoubleLeftSVG width={24} height={24} />
          </ArrowButton>
          <DateArea
            onClick={() => {
              dispatch({ type: "changeType", payload: "year" });
            }}
          >
            <span>{format(state.date, "yyyy")}년</span>
          </DateArea>
          <ArrowButton
            onClick={() => handleArrowButtonClick(addYears(state.date, 1))}
          >
            <DoubleRightSVG width={24} height={24} />
          </ArrowButton>
        </SelectArea>
      );
    }
    case "year": {
      const currentYear = state.date.getFullYear();
      const endYear = currentYear - (currentYear % 10);
      const startYear = endYear + 10;

      return (
        <SelectArea>
          <ArrowButton
            onClick={() => handleArrowButtonClick(addYears(state.date, -10))}
          >
            <DoubleLeftSVG width={24} height={24} />
          </ArrowButton>
          <DateArea>
            <span>
              {startYear} ~ {endYear}
            </span>
          </DateArea>
          <ArrowButton
            onClick={() => handleArrowButtonClick(addYears(state.date, 10))}
          >
            <DoubleRightSVG width={24} height={24} />
          </ArrowButton>
        </SelectArea>
      );
    }
    default: {
      return null;
    }
  }
};

Calendar.Navigation = Navigation;

Calendar.displayName = "Calendar";

export default Calendar;
