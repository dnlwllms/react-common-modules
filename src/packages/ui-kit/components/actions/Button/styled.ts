import styled, { css } from "styled-components";

import { StyledButtonProps } from "./types";

import { getColor, typography } from "../../../foundations";

export const ButtonStyledComponent = {
  StyledButton: styled.button<{ theme: StyledButtonProps }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 1px solid;
    cursor: pointer;

    ${getColor("background", "primary500")}

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small": {
          return css`
            padding: 0px 8px;
            height: 24px;
            border-radius: 4px;
            ${typography.body03R};
          `;
        }
        case "small": {
          return css`
            padding: 0px 16px;
            height: 32px;
            border-radius: 4px;
            ${typography.body02M};
          `;
        }
        case "large": {
          return css`
            padding: 0px 32px;
            height: 48px;
            border-radius: 8px;
            ${typography.body01M};
          `;
        }
        case "x-large": {
          return css`
            padding: 0px 40px;
            height: 56px;
            border-radius: 8px;
            ${typography.body01B};
          `;
        }
        case "medium":
        default: {
          return css`
            padding: 0px 24px;
            height: 40px;
            border-radius: 6px;
            ${typography.body02M};
          `;
        }
      }
    }}

    ${({ theme: { color } }) => {
      switch (color) {
        case "gray01": {
          return css`
            ${getColor("color", "white")};
            ${getColor("background-color", "gray900")};
            ${getColor("border-color", "gray900")};

            &:disabled {
              ${getColor("background-color", "gray200")};
              ${getColor("border-color", "gray200")};
              cursor: default;
            }
          `;
        }
        case "gray02": {
          return css`
            ${getColor("color", "gray900")};
            ${getColor("background-color", "white")};
            ${getColor("border-color", "gray200")};

            &:disabled {
              ${getColor("color", "gray200")};
              ${getColor("border-color", "gray200")};
              cursor: default;
            }
          `;
        }
        case "primary":
        default: {
          return css`
            ${getColor("color", "white")};
            ${getColor("background-color", "primary500")};
            ${getColor("border-color", "primary500")};

            &:disabled {
              ${getColor("background-color", "gray200")};
              ${getColor("border-color", "gray200")};
              cursor: default;
            }
          `;
        }
      }
    }}

    ${({ theme: { color, isDisabled } }) => {
      if (!isDisabled) {
        switch (color) {
          case "gray01": {
            return css`
              &:hover {
                ${getColor("background-color", "gray800")};
                ${getColor("border-color", "gray800")};
              }
            `;
          }
          case "gray02": {
            return css`
              &:hover {
                ${getColor("background-color", "gray100")};
              }
            `;
          }
          case "primary":
          default: {
            return css`
              &:hover {
                ${getColor("background-color", "primary400")};
                ${getColor("border-color", "primary400")};
              }
            `;
          }
        }
      }
    }}

    ${({ theme: { isCapsule } }) => {
      if (isCapsule) {
        return css`
          border-radius: 100px;
        `;
      }
    }}

    ${({ theme: { isBlock } }) => {
      if (isBlock) {
        return css`
          width: 100%;
        `;
      }
    }}
  `,
};
