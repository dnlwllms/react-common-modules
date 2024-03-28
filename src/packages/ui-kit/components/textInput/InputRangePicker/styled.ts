import styled, { css } from "styled-components";
import { InputDatePickerSize } from "./types";
import { getColor, typography } from "../../../foundations";

const InputDatePickerStyledComponents = {
  Container: styled.div<{
    theme: {
      isOpen: boolean;
      size?: InputDatePickerSize;
      isDisabled?: boolean;
      isSelected: boolean;
    };
  }>`
    display: flex;
    align-items: center;
    gap: 0 15px;
    padding: 0 16px;
    border: 1px solid;
    border-radius: 6px;
    ${getColor("border-color", "gray200")}

    svg {
      flex-shrink: 0;
    }

    ${({ theme: { isOpen } }) => {
      if (isOpen) {
        return css`
          ${getColor("border-color", "gray500")}
          svg {
            path {
              ${getColor("fill", "gray900")}
            }
          }
        `;
      }
    }}

    ${({ theme: { isDisabled } }) => {
      if (isDisabled) {
        return css`
          pointer-events: none;
          ${getColor("background-color", "gray100")}

          svg {
            path {
              ${getColor("fill", "gray200")}
            }
          }
        `;
      } else {
        return css`
          cursor: pointer;
        `;
      }
    }}

    ${({ theme: { isSelected } }) => {
      if (isSelected) {
        return css`
          svg {
            path {
              ${getColor("fill", "gray900")}
            }
          }
        `;
      }
    }}

    ${({ theme: { size } }) => {
      switch (size) {
        case "small": {
          return css`
            height: 32px;
          `;
        }
        case "medium":
        default: {
          return css`
            height: 40px;
          `;
        }
      }
    }}
  `,

  InputArea: styled.div<{
    theme: {
      isOpen: boolean;
      isDisabled?: boolean;
    };
  }>`
    display: inline-flex;
    flex-grow: 1;

    input {
      width: 100%;
      padding: 0;
      border: none;
      cursor: auto;
      pointer-events: none;
      ${typography.body02M}

      ${({ theme: { isOpen } }) => {
        if (isOpen) {
          return css`
            ${getColor("color", "gray500")}
          `;
        }
      }}
      background-color: transparent;
      ${getColor("color", "gray900")}

      &::placeholder {
        ${getColor("color", "gray500")}
      }

      &:disabled {
        ${getColor("background-color", "gray100")}
        ${getColor("color", "gray200")}

        &::placeholder {
          ${getColor("color", "gray200")}
        }
      }

      &:focus {
        ${getColor("color", "gray500")}
        outline: none;
      }
    }

    span {
      display: block;
      width: 9px;
      margin: 0 8px;

      ${({ theme: { isDisabled } }) => {
        if (isDisabled) {
          return css`
            ${getColor("color", "gray200")}
          `;
        } else {
          return css`
            ${getColor("color", "gray900")}
          `;
        }
      }}
    }
  `,
};

export default InputDatePickerStyledComponents;
