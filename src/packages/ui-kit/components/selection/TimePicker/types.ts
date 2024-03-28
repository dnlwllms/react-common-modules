import { HTMLAttributes } from "react";

export interface TimePickerProps extends HTMLAttributes<HTMLDivElement> {
  date?: Date;
  onDateChange?: (date: Date) => void;
  onOkClick?: () => void;

  hasDate?: boolean;
}
