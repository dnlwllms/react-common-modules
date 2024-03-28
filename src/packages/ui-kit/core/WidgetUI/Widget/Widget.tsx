import { forwardRef, useContext } from "react";

import { WidgetProps } from "./types";
import WidgetStyledComponents from "./styled";

import WidgetUIContext from "../context";
import { getOffsetPixelCoordinateFromGrid, getWidgetSize } from "../utils";

import CloseSVG from "./CloseSVG";

const { Container, CloseButton } = WidgetStyledComponents;

const Widget = forwardRef<HTMLDivElement, WidgetProps>(
  ({ grid, gridCoordinate, children, onClose, ...props }, ref) => {
    const { style, gridItemSize } = useContext(WidgetUIContext);

    const [width, height] = getWidgetSize(grid, gridItemSize, style?.gap);

    return (
      <Container
        {...props}
        ref={ref}
        style={{
          ...props.style,
          width,
          height,
        }}
        coordinate={
          gridCoordinate &&
          getOffsetPixelCoordinateFromGrid(gridCoordinate, gridItemSize, {
            gap: style?.gap,
            padding: style?.padding,
          })
        }
      >
        {children}
        {onClose && (
          <CloseButton onClick={onClose}>
            <CloseSVG />
          </CloseButton>
        )}
      </Container>
    );
  }
);

export default Widget;
