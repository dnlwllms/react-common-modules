import styled, { css } from "styled-components";

import { StyledButtonProps } from "./types";

import { getColor } from "../../../foundations";

const IconButtonStyledComponents = {
  StyledButton: styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      svg {
        path {
          ${getColor("fill", "gray200")};
        }
      }
    }

    ${({ size }) => {
      switch (size) {
        case "x-small": {
          return css`
            width: 24px;
            height: 24px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;
        }
        case "small": {
          return css`
            width: 32px;
            height: 32px;

            svg {
              width: 24px;
              height: 24px;
            }
          `;
        }
        case "medium":
          return css`
            width: 40px;
            height: 40px;

            svg {
              width: 32px;
              height: 32px;
            }
          `;
      }
    }}
  `,
};

export default IconButtonStyledComponents;
