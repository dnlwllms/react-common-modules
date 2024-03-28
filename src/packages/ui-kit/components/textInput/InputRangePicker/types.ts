import { HTMLAttributes } from "react";
import { RangePickerProps } from "../../selection/Calendar/types";

export type InputDatePickerSize = "small" | "medium";

export interface InputRangePickerProps
  extends RangePickerProps,
    Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: InputDatePickerSize;
  isDisabled?: boolean;
}
