import styled, { css } from "styled-components";

import { RadioButtonSize } from "./types";

import { getColor, typography } from "../../../foundations";

const RadioButtonStyledComponents = {
  Container: styled.div`
    display: inline-flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-direction: row-reverse;
    }
  `,

  CheckArea: styled.div<{
    theme: {
      isChecked: boolean;
      isDisabled: boolean;
      size: RadioButtonSize;
    };
  }>`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    border: 1px solid;
    border-radius: 50%;

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            width: 14px;
            height: 14px;

            svg {
              width: 8px;
              height: 8px;
            }
          `;
        case "small":
        default:
          return css`
            width: 16px;
            height: 16px;

            svg {
              width: 10px;
              height: 10px;
            }
          `;
      }
    }}

    ${({ theme: { isDisabled, isChecked } }) =>
      isDisabled
        ? css`
            ${getColor("border-color", "gray200")}
            ${getColor("background", "gray100")}
            
            svg {
              circle {
                ${getColor("fill", "gray200")}

                transition: 0.2s;
              }
            }

            cursor: default;
          `
        : css`
            ${isChecked
              ? getColor("border-color", "gray900")
              : getColor("border-color", "gray500")}

            &:hover {
              ${getColor("border-color", "gray900")}
            }

            cursor: pointer;
          `}

    transition: 0.2s;
  `,

  Label: styled.label<{
    theme: {
      size: RadioButtonSize;
      isDisabled?: boolean;
      isChecked?: boolean;
    };
  }>`
    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            ${typography.body03R}
          `;
        case "small":
        default:
          return css`
            ${typography.body02R}
          `;
      }
    }}

    ${({ theme: { isDisabled } }) => {
      if (isDisabled) {
        return css`
          ${getColor("color", "gray200")}
        `;
      } else {
        return css`
          ${getColor("color", "gray900")}
          cursor: pointer;
          &:hover {
            + div {
              ${getColor("border-color", "gray900")}
            }
          }
        `;
      }
    }}
  `,
};

export default RadioButtonStyledComponents;
