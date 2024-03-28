import styled, { css } from "styled-components";
import { StyledChipProps } from "./types";
import { getColor, typography } from "../../../foundations";

const ChipStyledComponents = {
  Container: styled.div<{ theme: StyledChipProps }>`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    gap: 4px;

    border: 1px solid;

    transition: 0.2s;

    cursor: pointer;

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            height: 24px;
            padding: 0 8px;
            border-radius: 4px;

            ${typography.body03R}

            svg {
              width: 12px;
              height: 12px;
            }
          `;
        case "small":
          return css`
            height: 32px;
            padding: 0 8px;
            border-radius: 4px;

            ${typography.body02M}

            svg {
              width: 14px;
              height: 14px;
            }
          `;
        case "medium":
        default: {
          return css`
            height: 40px;
            padding: 0 16px;
            border-radius: 6px;

            ${typography.body02M}

            svg {
              width: 16px;
              height: 16px;
            }
          `;
        }
      }
    }}

    ${({ theme: { isDisabled, isSelected } }) => {
      if (isDisabled) {
        return css`
          ${getColor("background", "gray200")}
          ${getColor("color", "white")}
          cursor: default;
        `;
      } else {
        if (isSelected) {
          return css`
            ${getColor("border-color", "gray900")}
            ${getColor("color", "white")}
            ${getColor("background", "gray900")}
          `;
        } else {
          return css`
            ${getColor("border-color", "gray200")}
            ${getColor("color", "gray900")}
            ${getColor("background", "white")}

            &:hover {
              ${getColor("border-color", "gray900")}
            }
          `;
        }
      }
    }}
  `,
};

export default ChipStyledComponents;
