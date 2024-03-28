import { forwardRef } from "react";

import { TooltipProps } from "./types";
import TooltipStyledComponents from "./styled";

import TriangleSVG from "./TriangleSVG";

const { Container } = TooltipStyledComponents;

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    { direction = "top", color = "gray", size = "medium", children, hideArrow },
    ref
  ) => {
    return (
      <Container ref={ref} theme={{direction, color, size}}>
        <span>{children}</span>
        {!hideArrow && <TriangleSVG />}
      </Container>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
