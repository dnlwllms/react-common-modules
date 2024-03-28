import { GridItemDOMRect } from "../types";

export interface GridProps {
  onLongPress: () => void;
  onTouch: () => void;
  onGridItemsChange: (gridItemsRect: GridItemDOMRect[]) => void;
}
