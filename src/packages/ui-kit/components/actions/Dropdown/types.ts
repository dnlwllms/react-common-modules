import { InputHTMLAttributes } from "react";

export type DropdownSize = "x-small" | "small" | "medium" | "large";

export interface DropdownOption {
  title?: string;
  value: string;
}

export interface DropdownProps
  extends Omit<
    InputHTMLAttributes<HTMLDivElement>,
    "size" | "onChange" | "onClick" | "value"
  > {
  size?: DropdownSize;

  options: DropdownOption[];

  value: string;
  onChange?: (value: DropdownOption["value"]) => void;

  isDisabled?: boolean;
  zIndex?: number;
}

export interface DropdownContextType {
  size: DropdownSize;
}
