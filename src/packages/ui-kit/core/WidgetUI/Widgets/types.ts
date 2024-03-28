import { Coordinate, WidgetRegistInfo } from "../types";

export interface WidgetsProps {
  onWidgetMove: (pixcelCoordinate: Coordinate["pixelCoordinate"]) => void;

  onWidgetSelect: (widget: WidgetRegistInfo) => void;

  onMoveFinish: () => void;

  onWidgetRemove: (widget: WidgetRegistInfo) => void;
}
