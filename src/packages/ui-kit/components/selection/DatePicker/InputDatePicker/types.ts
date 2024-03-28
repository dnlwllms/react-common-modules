import { HTMLAttributes } from "react";
import { DatePickerProps } from "../types";

export type InputDatePickerSize = "small" | "medium";

export interface InputDatePickerProps
  extends DatePickerProps,
    HTMLAttributes<HTMLDivElement> {
  size?: InputDatePickerSize;
  isDisabled?: boolean;
}
