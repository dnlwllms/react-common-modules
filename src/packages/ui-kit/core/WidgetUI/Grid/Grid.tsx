import { FC, useContext, useEffect, useRef } from "react";

import { GridProps } from "./types";
import GridStyledComponents from "./styled";

import WidgetUIContext from "../context";

import GridItem from "./GridItem";
import { GridItemDOMRect } from "../types";

const { Container } = GridStyledComponents;

const Grid: FC<GridProps> = ({ onLongPress, onTouch, onGridItemsChange }) => {
  const {
    grid: [v, h],
    style,
    isEditMode,
  } = useContext(WidgetUIContext);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const rects: DOMRect[] = [];
      const gridItemsDOMRect: GridItemDOMRect[] = [];
      ref.current.childNodes.forEach((child) => {
        const rect = (child as HTMLDivElement).getBoundingClientRect();
        rects.push(rect);
      });

      let index = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < v; x++, index++) {
          gridItemsDOMRect.push({
            index: [x, y],
            rect: rects[index],
          });
        }
      }

      onGridItemsChange(gridItemsDOMRect);
    }
  }, [h, onGridItemsChange, v]);

  const longPressTimerRef = useRef<NodeJS.Timeout>();

  const handleMouseDown = () => {
    if (isEditMode) {
      onTouch();
    }

    longPressTimerRef.current = setTimeout(() => {
      onLongPress();
    }, 2000);
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimerRef.current);
  };

  return (
    <Container
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        gap: style?.gap,
        padding: style?.padding,
        gridTemplateColumns: `repeat(${v}, 1fr)`,
      }}
    >
      {Array.from({ length: h }).map((_, y) => {
        return Array.from({ length: v }).map((_, x) => {
          return <GridItem key={`${y}-${x}`} />;
        });
      })}
    </Container>
  );
};

export default Grid;
