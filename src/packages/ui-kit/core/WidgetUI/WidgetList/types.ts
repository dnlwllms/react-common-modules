import { Coordinate, WidgetInfo } from "../types";

export interface WidgetListProps {
  onWidgetMove: (pixcelCoordinate: Coordinate["pixelCoordinate"]) => void;

  onWidgetSelect: (widget: WidgetInfo) => void;

  onMoveFinish: () => void;
}
