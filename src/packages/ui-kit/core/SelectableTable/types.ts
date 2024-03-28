import { TableProps } from "../Table";

export interface SelectableTableProps extends TableProps {
  hasHeader?: boolean;
}

export type CellState = "startPoint" | "endPoint" | "selected" | undefined;

export type ReducerActionConfig = {
  setStartPoint: [number, number];
  setCurrentPoint: [number, number];
  setEndPoint: [number, number] | undefined;
};

export type ReducerState = {
  isActive: boolean;
  startPoint?: [number, number];
  currentPoint?: [number, number];
  endPoint?: [number, number];
};

export type ReducerActions = {
  [key in keyof ReducerActionConfig]: {
    type: key;
    payload?: ReducerActionConfig[key];
  };
};

export type ReducerAction = ReducerActions[keyof ReducerActionConfig];

export interface MainTableProps {
  onSelect: (selected: [number, number][]) => void;
}

export interface MainTableBodyProps {
  onSelect: (selected: [number, number][]) => void;
}

export interface VirtualTableProps {
  selectedPoints: [number, number][];
}
