import { HTMLAttributes } from "react";
import { DatePickerProps } from "../types";

export type InputTimePickerSize = "small" | "medium";

export interface InputTimePickerProps
  extends DatePickerProps,
    HTMLAttributes<HTMLDivElement> {
  size?: InputTimePickerSize;
  isDisabled?: boolean;
}
