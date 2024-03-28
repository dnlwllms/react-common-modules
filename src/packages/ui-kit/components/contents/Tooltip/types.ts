export type TooltipDirection = "top" | "left" | "right" | "bottom";

export type TooltipColor = "gray" | "white";

export type TooltipSize = "x-small" | "small" | "medium" | "large" | "x-large";

export interface TooltipProps {
  direction?: TooltipDirection;
  color?: TooltipColor;
  /**
   * @default "medium"
   */
  size?: TooltipSize;

  children?: string;

  hideArrow?: boolean;
}
