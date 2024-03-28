import { DatePickerProps } from "../../selection/Calendar/types";
import { InputProps } from "../Input/types";

export interface InputDatePickerProps
  extends DatePickerProps,
    Omit<InputProps, "value" | "onChange"> {
  isDisabled?: boolean;

  dateFormat?: string;
}
