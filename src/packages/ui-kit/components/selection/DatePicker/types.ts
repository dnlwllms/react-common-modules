export type Range = [Date | undefined, Date | undefined];

export interface DatePickerProps {
  date?: Date;
  range?: Range;
  onDateChange?: (date: Date) => void;
  onRangeChange?: (range: Range) => void;
  onTimePickerOkClick?: () => void;
  hasRange?: boolean;
  hasTime?: boolean;

  rangeQuickButtons?: {
    title: string;
    unit: QuickActionUnit;
    amount: number;
  }[];
}

export type QuickActionUnit = "year" | "week" | "month" | "date";

export type ArrowType =
  | "left"
  | "right"
  | "doubleLeft"
  | "doubleRight"
  | "doubleLeftYear"
  | "doubleRightYear";
