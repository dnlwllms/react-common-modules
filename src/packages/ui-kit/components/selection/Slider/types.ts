export interface SliderProps {
  value?: [number, number];
  min?: number;
  max?: number;
  step?: number;

  names?: [string, string];

  onChange?: (value: [number, number]) => void;

  isDisabled?: boolean;
  hasLabel?: boolean;

  labels?: [string, string];
}

export type PointPosition = "left" | "right";
