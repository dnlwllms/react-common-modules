import { FC, useCallback, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { WidgetListProps } from "./types";
import WidgetListStyledComponents from "./styled";
import WidgetUIContext from "../context";

import Widget from "../Widget";
import { WidgetInfo } from "../types";

const { Container } = WidgetListStyledComponents;

const WidgetList: FC<WidgetListProps> = ({
  onWidgetSelect,
  onWidgetMove,
  onMoveFinish,
}) => {
  const { widgets, selectedNewWidget: selctedNewWidget } =
    useContext(WidgetUIContext);

  const newWidgetRef = useRef<HTMLDivElement>(null);
  const startRectRef = useRef<DOMRect>();
  const startPointRef = useRef<[number, number]>();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (startPointRef.current && newWidgetRef.current) {
        const [startX, startY] = startPointRef.current;
        newWidgetRef.current.style.transform = `translate(${
          e.pageX - startX
        }px, ${e.pageY - startY}px)`;

        const { x, y } = newWidgetRef.current.getBoundingClientRect();
        onWidgetMove([x, y]);
      }
    },
    [onWidgetMove]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const handleMouseDown = (widget: WidgetInfo, e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;

    startRectRef.current = target.getBoundingClientRect();
    startPointRef.current = [e.pageX, e.pageY];

    onWidgetSelect(widget);
  };

  return (
    <Container>
      {widgets.map((widget) => {
        const { grid, component } = widget;

        return (
          <Widget
            key={component.key}
            grid={grid}
            onMouseDown={(e) => handleMouseDown(widget, e)}
          >
            {component.element}
          </Widget>
        );
      })}
      {selctedNewWidget &&
        startRectRef.current &&
        createPortal(
          <Widget
            ref={newWidgetRef}
            grid={selctedNewWidget.grid}
            style={{
              position: "fixed",
              left: startRectRef.current.x,
              top: startRectRef.current.y,
            }}
            onMouseUp={onMoveFinish}
          >
            {selctedNewWidget.component.element}
          </Widget>,
          document.body
        )}
    </Container>
  );
};

export default WidgetList;
