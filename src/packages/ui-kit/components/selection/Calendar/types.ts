import { Dispatch, FC, ReactNode } from "react";

export type Schedule = {
  id: string;
  date: Date;
};

export interface CalendarComponent extends FC<CalendarProps> {
  Navigation: FC<CalendarNavigationProps>;
}

export type CalendarChildrenContext = {
  dates: [Date[], Date[], Date[]];
  state: CalendarReducerState;
  dispatch: Dispatch<CalendarReducerAction>;
  calendarHeaderDays: { key: string; label: string }[];
};

export type CalendarType = "year" | "month" | "date";
export type CalendarNavigationType = CalendarType;

export interface CalendarProps {
  date?: Date;
  children: (ctx: CalendarChildrenContext) => ReactNode;
}

export interface CalendarNavigationProps {
  type: CalendarNavigationType;
  onNavigate?: (date: Date) => void;
}

export type Range = [Date | undefined, Date | undefined];
export type QuickActionUnit = "year" | "week" | "month" | "date";
export type ArrowType =
  | "left"
  | "right"
  | "doubleLeft"
  | "doubleRight"
  | "doubleLeftYear"
  | "doubleRightYear";

export type CalendarReducerState = {
  type: CalendarType;
  date: Date;
};

export type CalendarReducerActionConfig = {
  changeType: CalendarType;
  changeYear: number;
  changeMonth: number;
  changeDate: Date;
};

export type CalendarReducerAction = {
  [key in keyof CalendarReducerActionConfig]: {
    type: key;
    payload: CalendarReducerActionConfig[key];
  };
}[keyof CalendarReducerActionConfig];

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  onNavigate?: (date: Date) => void;
  hasTime?: boolean;
}

export interface RangePickerProps {
  value?: Range;
  onChange?: (date: Range) => void;
  hasTime?: boolean;
  rangeQuickButtons?: {
    title: string;
    unit: QuickActionUnit;
    amount: number;
  }[];
}

export type ScheduleInfo = {
  key: string;
  title: string;
  date: Date;
};

export interface SchedulerProps {
  date?: Date;
  onChange?: (date: Date) => void;
  schedules: ScheduleInfo[];
}
