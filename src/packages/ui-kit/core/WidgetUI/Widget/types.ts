import { HTMLAttributes } from "react";

export interface WidgetProps extends HTMLAttributes<HTMLDivElement> {
  grid: [number, number];
  gridCoordinate?: [number, number];

  onClose?: () => void;
}
