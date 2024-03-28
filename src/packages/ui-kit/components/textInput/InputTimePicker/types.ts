import { HTMLAttributes } from "react";
import { DatePickerProps } from "../../selection/Calendar/types";

export type InputTimePickerSize = "small" | "medium";

export interface InputTimePickerProps
  extends DatePickerProps,
    Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: InputTimePickerSize;
  isDisabled?: boolean;
}
