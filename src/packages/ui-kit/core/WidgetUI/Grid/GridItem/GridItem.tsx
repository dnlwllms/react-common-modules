import { forwardRef } from "react";

import { GridItemProps } from "./types";
import GridItemStyledComponents from "./styled";

const { Container } = GridItemStyledComponents;

const GridItem = forwardRef<HTMLDivElement, GridItemProps>((props, ref) => {
  return <Container ref={ref} />;
});

export default GridItem;
