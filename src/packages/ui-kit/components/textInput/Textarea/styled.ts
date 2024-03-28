import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";

const TextareaStyledComponents = {
  Container: styled.div<{
    theme: {
      isError: boolean;
      isFocus: boolean;
      isDisabled?: boolean;
    };
  }>`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    ${typography.body02M}
    border-radius: 6px;
    padding: 10px 16px;

    ${({ theme: { isError, isFocus } }) => {
      if (isError) {
        return css`
          ${getColor("border-color", "red500")}
        `;
      } else if (isFocus) {
        return css`
          ${getColor("border-color", "gray500")}
        `;
      } else {
        return css`
          ${getColor("border-color", "gray200")}
        `;
      }
    }}

    ${({ theme: { isDisabled } }) => {
      if (isDisabled) {
        return css`
          ${getColor("border-color", "gray200")}
          ${getColor("background-color", "gray100")}
        `;
      }
    }}
  `,

  StyledTextarea: styled.textarea`
    ${typography.body02M}
    border: none;
    resize: none;
    outline: none;
    padding: 0;
    &::placeholder {
      ${getColor("color", "gray400")}
    }

    &:disabled {
      ${getColor("background-color", "gray100")}
      &::placeholder {
        ${getColor("color", "gray100")}
      }
    }
  `,

  InfoArea: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  LengthArea: styled.div<{ theme: { isDisabled?: boolean } }>`
    span {
      &:first-of-type {
        ${getColor("color", "gray900")}
      }
      &:last-of-type {
        ${getColor("color", "gray500")}
      }

      ${({ theme: { isDisabled } }) => {
        if (isDisabled) {
          return css`
            &:first-of-type {
              ${getColor("color", "gray200")}
            }
            &:last-of-type {
              ${getColor("color", "gray200")}
            }
          `;
        }
      }}
    }
  `,
};

export default TextareaStyledComponents;
