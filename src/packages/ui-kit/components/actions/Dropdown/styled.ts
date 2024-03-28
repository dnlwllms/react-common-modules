import styled, { css } from "styled-components";

import { DropdownSize } from "./types";

import { getColor, typography } from "../../../foundations";

const DropdownStyledComponents = {
  Container: styled.div`
    position: relative;

    display: inline-flex;
    flex-direction: column;
    ${getColor("background", "white")}
  `,

  StyledSelect: styled.select<{
    theme: {
      isMobile?: boolean;
      size: DropdownSize;
    };
  }>`
    ${getColor("color", "gray900")}
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    text-overflow: ellipsis;

    border: 1px solid;
    ${getColor("border-color", "gray200")}

    
    &:focus {
      outline: 1px solid;
      ${getColor("outline-color", "gray500")}
    }

    &:disabled {
      ${getColor("color", "gray200")}
    }

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            height: 24px;
            padding: 0px 24px 0 8px;
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
            padding: 0px 28px 0 8px;
            border-radius: 4px;
            ${typography.body02M}

            svg {
              width: 14px;
              height: 14px;
            }
          `;
        case "large":
          return css`
            height: 48px;
            padding: 0px 40px 0 16px;
            border-radius: 6px;
            ${typography.body01M}

            svg {
              width: 16px;
              height: 16px;
            }
          `;
        case "medium":
        default:
          return css`
            height: 40px;
            padding: 0px 38px 0 16px;
            border-radius: 6px;
            ${typography.body02M}

            svg {
              width: 14px;
              height: 14px;
            }
          `;
      }
    }}
  `,

  SVGContainer: styled.div<{ theme: { size: DropdownSize } }>`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    ${({ theme: { size } }) => {
      switch (size) {
        case "x-small":
          return css`
            right: 8px;
            svg {
              width: 12px;
              height: 12px;
            }
          `;
        case "small":
          return css`
            right: 8px;
            svg {
              width: 14px;
              height: 14px;
            }
          `;
        case "large":
          return css`
            right: 16px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;
        case "medium":
        default:
          return css`
            right: 16px;
            svg {
              width: 14px;
              height: 14px;
            }
          `;
      }
    }}
  `,
};

export default DropdownStyledComponents;
