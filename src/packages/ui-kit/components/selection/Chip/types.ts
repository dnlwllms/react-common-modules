import { InputHTMLAttributes, PropsWithChildren } from "react";

export type ChipSize = "x-small" | "small" | "medium";

export interface ChipProps
  extends PropsWithChildren,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  isDisabled?: boolean;
  isSelected?: boolean;

  /**
   * @default "medium"
   */
  size?: ChipSize;

  hasTrailingIcon?: boolean;

  onChange?: (isSelected: boolean) => void;
}

export interface StyledChipProps
  extends Omit<ChipProps, "hasTrailingIcon" | "onChange"> {
  isDisabled?: boolean;
  isSelected?: boolean;

  size?: ChipSize;
}
