import styled, { css } from "styled-components";

import { StyledButtonProps } from "./types";

import { getColor, typography } from "../../../foundations";

const TextButtonStyledComponents = {
  StyledButton: styled.button<{ theme: StyledButtonProps }>`
    background: none;
    border: none;
    ${getColor("color", "gray900")};
    cursor: pointer;

    > span {
      display: flex;
      align-items: center;
    }

    ${({ theme: { hasUnderline, isDisabled } }) => {
      if (hasUnderline && !isDisabled) {
        return css`
          > span {
            border-bottom: 1px solid;
            border-bottom-color: transparent;
            &:hover {
              ${getColor("border-bottom-color", "gray800")}
            }
          }
        `;
      }
    }}

    &:disabled {
      ${getColor("color", "gray200")};
      cursor: default;

      &:hover {
        text-decoration: none;
      }
    }

    ${({ theme: { size } }) => {
      switch (size) {
        case "small": {
          return css`
            > span {
              gap: 4px;
              ${typography.body03M};
            }
          `;
        }
        case "large": {
          return css`
            > span {
              gap: 6px;
              ${typography.body01M};
            }
          `;
        }
        case "medium":
        default: {
          return css`
            > span {
              gap: 4px;
              ${typography.body02M};
            }
          `;
        }
      }
    }}
  `,

  IconArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default TextButtonStyledComponents;
