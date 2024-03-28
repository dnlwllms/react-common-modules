import { FC, useCallback } from "react";

import { LegendProps } from "./types";
import LegendStyledComponents from "./styled";
import { colors } from "../../../../foundations";

const { Container, LegendList, LegendListItem, Point } = LegendStyledComponents;

const Legend: FC<LegendProps> = ({ items, colorPalette, onItemClick }) => {
  const getColor = useCallback(
    (index: number) => {
      switch (colorPalette) {
        case "gradient":
        case "translucency":
        case "default": {
          return colors[`data0${(index % 10) + 1}` as keyof typeof colors];
        }
        case "xPlusMinus":
        case "yPlusMinus": {
          return index % 2 ? colors.minus500 : colors.plus500;
        }
      }
    },
    [colorPalette]
  );

  return (
    <Container>
      <LegendList>
        {items.map((item, index) => {
          const { label, isHide } = item;
          return (
            <LegendListItem
              key={index}
              onClick={() => onItemClick(item, index)}
              style={{
                textDecoration: isHide ? "line-through" : "none",
              }}
            >
              <Point
                style={{
                  background: getColor(index),
                }}
              />
              <span>{label}</span>
            </LegendListItem>
          );
        })}
      </LegendList>
    </Container>
  );
};

export default Legend;
