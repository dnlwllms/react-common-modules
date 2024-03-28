import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ButtonSize = "x-small" | "small" | "medium" | "large" | "x-large";

export type ButtonColor = "gray01" | "gray02" | "primary";

export interface ButtonProps
  extends PropsWithChildren,
    StyledButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: {
    position: "leading" | "trailing";
    node: ReactNode;
  };
  isDisabled?: boolean;
}

export interface StyledButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  isCapsule?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
}
