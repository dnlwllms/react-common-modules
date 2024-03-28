import styled, { css } from "styled-components";

import { CheckboxSize } from "./types";
import { getColor, typography } from "../../../foundations";

const CheckboxStyledComponents = {
  Container: styled.div`
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 0 4px;
      flex-direction: row-reverse;
    }
  `,

  CheckArea: styled.div<{
    theme: {
      isChecked: boolean;
      isDisabled?: boolean;
      size?: CheckboxSize;
    };
  }>`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    border: 1px solid;
    border-radius: 2px;

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            width: 14px;
            height: 14px;
          `;
        case "small":
        default:
          return css`
            width: 16px;
            height: 16px;
          `;
      }
    }}

    ${({ theme: { isDisabled, isChecked } }) =>
      isDisabled
        ? css`
            ${getColor("border-color", "gray200")}
            ${getColor("background", "gray100")}

            cursor: default;
          `
        : css`
            ${isChecked
              ? getColor("border-color", "gray900")
              : getColor("border-color", "gray500")}

            ${isChecked
              ? getColor("background", "gray900")
              : getColor("background", "white")}


            &:hover {
              ${getColor("border-color", "gray900")}
            }

            cursor: pointer;
          `}

    transition: 0.2s;
  `,

  Label: styled.label<{ theme: { size: CheckboxSize; isDisabled?: boolean } }>`
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

export default CheckboxStyledComponents;
