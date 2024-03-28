import styled, { css } from "styled-components";

import { TooltipColor, TooltipDirection, TooltipSize } from "./types";

import { getColor, typography } from "../../../foundations";

const TooltipStyledComponents = {
  Container: styled.div<{
    theme: {
      direction: TooltipDirection;
      color: TooltipColor;
      size: TooltipSize;
    };
  }>`
    box-sizing: border-box;
    position: relative;

    display: inline-block;

    #tooltip-triangle {
      position: absolute;

      margin: auto;
    }

    ${({ theme }) => {
      switch (theme.size) {
        case "x-small":
          return css`
            padding: 4px 8px;
            border-radius: 4px;

            ${typography.body03R}
          `;
        case "small":
          return css`
            padding: 4px 16px;
            border-radius: 4px;

            ${typography.body02M}
          `;
        case "large":
          return css`
            padding: 12px 32px;
            border-radius: 8px;

            ${typography.body01M}
          `;
        case "x-large":
          return css`
            padding: 16px 40px;
            border-radius: 8px;

            ${typography.body01B}
          `;
        case "medium":
        default:
          return css`
            padding: 10px 24px;
            border-radius: 6px;

            ${typography.body02M}
          `;
      }
    }}

    ${({ theme }) => {
      switch (theme.color) {
        case "white":
          return css`
            #tooltip-triangle {
              path {
                ${getColor("fill", "white")}
              }
            }
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
          `;
        case "gray":
        default: {
          return css`
            ${getColor("color", "white")}
            ${getColor("background", "grayDimmedEffectBlack70D")}

            #tooltip-triangle {
              path {
                ${getColor("fill", "grayDimmedEffectBlack70D")}
              }
            }
          `;
        }
      }
    }}

    ${({ theme }) => {
      switch (theme.direction) {
        case "left":
          return css`
            #tooltip-triangle {
              top: 0;
              bottom: 0;
              left: 100%;
              transform: translateX(-3px) rotate(-90deg);
            }
          `;
        case "right":
          return css`
            #tooltip-triangle {
              top: 0;
              bottom: 0;
              right: 100%;

              transform: translateX(3px) rotate(90deg);
            }
          `;
        case "bottom":
          return css`
            #tooltip-triangle {
              bottom: 100%;
              left: 0;
              right: 0;

              transform: rotate(180deg);
            }
          `;
        case "top":
        default: {
          return css`
            #tooltip-triangle {
              top: 100%;
              left: 0;
              right: 0;
            }
          `;
        }
      }
    }}

    transition: 0.2s;
  `,
};

export default TooltipStyledComponents;
