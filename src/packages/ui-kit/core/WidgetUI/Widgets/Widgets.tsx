import {
  FC,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

import { WidgetsProps } from "./types";
import WidgetUIContext from "../context";

import Widget from "../Widget";
import { WidgetRegistInfo } from "../types";

const Widgets: FC<WidgetsProps> = ({
  onMoveFinish,
  onWidgetMove,
  onWidgetSelect,
  onWidgetRemove,
}) => {
  const { data, widgets } = useContext(WidgetUIContext);

  const widgetRef = useRef<HTMLDivElement>();
  const startRectRef = useRef<DOMRect>();
  const startPointRef = useRef<[number, number]>();

  const handleMouseDown = (widget: WidgetRegistInfo, e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;

    widgetRef.current = document.getElementById(widget.id) as HTMLDivElement;
    widgetRef.current.style.zIndex = "1";
    
    startRectRef.current = target.getBoundingClientRect();
    startPointRef.current = [e.pageX, e.pageY];

    onWidgetSelect(widget);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (startPointRef.current && widgetRef.current) {
        const [startX, startY] = startPointRef.current;
        widgetRef.current.style.transform = `translate(${e.pageX - startX}px, ${
          e.pageY - startY
        }px)`;

        const { x, y } = widgetRef.current.getBoundingClientRect();
        onWidgetMove([x, y]);
      }
    },
    [onWidgetMove]
  );

  const handleMouseUp = useCallback(() => {
    if (widgetRef.current) {
      startRectRef.current = undefined;
      startPointRef.current = undefined;
      widgetRef.current.style.transform = "none";
      widgetRef.current.style.zIndex = "0";
    }
    onMoveFinish();
  }, [onMoveFinish]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Fragment>
      {data.map((widgetRegistInfo) => {
        const { id, grid, componentKey, gridCoordinate } = widgetRegistInfo;
        const widget = widgets.find(
          (widget) => widget.component.key === componentKey
        );

        return widget ? (
          <Widget
            id={id}
            key={id}
            grid={grid}
            gridCoordinate={gridCoordinate}
            onMouseDown={(e) => handleMouseDown(widgetRegistInfo, e)}
            onClose={() => onWidgetRemove(widgetRegistInfo)}
          >
            {widget.component.element}
          </Widget>
        ) : null;
      })}
    </Fragment>
  );
};

export default Widgets;
