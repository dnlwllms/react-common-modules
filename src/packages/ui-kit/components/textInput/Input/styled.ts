import styled, { css } from "styled-components";

import { InputSize, InputShape } from "./types";

import { getColor, typography } from "../../../foundations";

const InputStyledComponents = {
  Container: styled.div`
    display: flex;
    width: 184px;
    flex-direction: column;
    gap: 6px;
  `,

  InputContainer: styled.div<{
    theme: {
      shape: InputShape;
      size: InputSize;
      isCapsule?: boolean;
      isFocused: boolean;
      isTyping: boolean;
      isCompleted: boolean;
      isDisabled?: boolean;
      isError?: boolean;
    };
  }>`
    display: flex;
    align-items: center;
    gap: 6px;
    box-sizing: border-box;
    span {
      display: flex;
      align-items: center;
    }

    ${getColor("color", "gray900")}

    input {
      width: 100%;
      padding: 0;
      outline: none;
      border: none;
      background-color: transparent;

      &::placeholder {
        ${getColor("color", "gray400")}
      }

      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }

    ${({ theme }) => {
      if (theme.isCapsule) {
        switch (theme.size) {
          case "large":
            return css`
              height: 48px;
              padding: 0 16px;
              border-radius: 100px;

              input {
                ${typography.body01M}
              }
            `;
          case "small":
            return css`
              height: 32px;
              padding: 0 8px;
              border-radius: 100px;

              input {
                ${typography.body02M}
              }
            `;
          case "medium":
          default: {
            return css`
              height: 40px;
              padding: 0 16px;
              border-radius: 100px;

              input {
                ${typography.body02M}
              }
            `;
          }
        }
      } else {
        switch (theme.size) {
          case "large":
            return css`
              height: 48px;
              padding: 0 16px;

              input {
                ${typography.body01M}
              }
            `;
          case "small":
            return css`
              height: 32px;
              padding: 0 8px;

              input {
                ${typography.body02M}
              }
            `;
          case "medium":
          default: {
            return css`
              height: 40px;
              padding: 0 16px;

              input {
                ${typography.body02M}
              }
            `;
          }
        }
      }
    }}

    ${({ theme }) => {
      switch (theme.shape) {
        case "underline":
          if (theme.isDisabled) {
            return css`
              padding-left: 0;
              padding-right: 0;

              border-bottom: 1px solid;
              ${getColor("border-color", "gray200")}
              input {
                &::placeholder {
                  color: transparent;
                }
              }
            `;
          } else {
            return css`
              border-bottom: 1px solid;
              padding-left: 0;
              padding-right: 0;
            `;
          }
        case "box":
        default: {
          if (theme.isDisabled) {
            return css`
              ${getColor("background-color", "gray100")}
              border: 1px solid;
              border-radius: 4px;
              ${getColor("border-color", "gray200")}

              input {
                &::placeholder {
                  ${getColor("color", "gray100")}
                }
              }
            `;
          } else {
            return css`
              border: 1px solid;
              border-radius: 4px;
            `;
          }
        }
      }
    }}


    ${({ theme }) => {
      if (theme.isFocused) {
        if (theme.isError) {
          return css`
            ${getColor("border-color", "red500")}
          `;
        } else {
          return css`
            ${getColor("border-color", "gray500")}
          `;
        }
      } else {
        if (theme.isError) {
          return css`
            ${getColor("border-color", "red500")}
          `;
        } else {
          return css`
            ${getColor("border-color", "gray200")}
          `;
        }
      }
    }}

    ${({ theme }) => {
      if (theme.isCompleted) {
        if (theme.isError) {
          return css`
            ${getColor("border-color", "red500")}
          `;
        } else {
          return css`
            ${getColor("border-color", "gray200")}
          `;
        }
      }
    }}
  `,

  IconContainer: styled.span<{
    theme: {
      size: InputSize;
      isFocused: boolean;
      isCompleted: boolean;
      isDisabled?: boolean;
    };
  }>`
    ${({ theme: { size } }) => {
      switch (size) {
        case "large": {
          return css`
            svg {
              width: 24px;
              height: 24px;
            }
          `;
        }
        case "small": {
          return css`
            svg {
              width: 14px;
              height: 14px;
            }
          `;
        }
        case "medium":
        default: {
          return css`
            svg {
              width: 14px;
              height: 14px;
            }
          `;
        }
      }
    }}

    ${({ theme: { isFocused } }) => {
      if (isFocused) {
        return css``;
      } else {
        return css`
          svg {
            path {
              ${getColor("fill", "gray400")}
            }
          }
        `;
      }
    }}

    ${({ theme: { isCompleted } }) => {
      if (isCompleted) {
        return css`
          svg {
            path {
              ${getColor("fill", "gray900")}
            }
          }
        `;
      }
    }}

    cursor: default;
  `,

  CloseContainer: styled.span`
    cursor: pointer;
  `,
};

export default InputStyledComponents;
