import { PropsWithChildren } from "react";

export type ToastColor = "black" | "white";

export type ToastSize = "medium" | "large";

export interface ToastProps {
  /**
   * @default "black"
   */
  color?: ToastColor;

  /**
   * @default "medium"
   */
  size?: ToastSize;

  /**
   * @default ""
   */
  message: string;
}

export interface ToastContextType {
  toasts: ToastProps[];
  setToasts: (toasts: ToastProps[]) => void;
}

export interface ToastProviderProps extends PropsWithChildren {}
