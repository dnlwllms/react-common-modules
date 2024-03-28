import styled, { css } from "styled-components";

import { PaginationColor } from "./types";

import { getColor, typography } from "../../../foundations";

const PaginationStyledComponents = {
  DotContainer: styled.div`
    display: flex;
    gap: 6px;
  `,
  NumberContainer: styled.div<{ theme: { color: PaginationColor } }>`
    display: inline-block;
    box-sizing: border-box;

    padding: 2px 8px;

    border: 1px solid;
    border-radius: 100px;

    ${({ theme }) => {
      switch (theme.color) {
        case "gray02":
          return css`
            ${getColor("border-color", "gray200")}
            ${getColor("background", "white")}
            ${getColor("color", "gray600")}
          `;
        case "gray01":
        default: {
          return css`
            ${getColor("border-color", "gray900")}
            ${getColor("background", "gray900")}
            ${getColor("color", "white")}

            opacity: 0.5;
          `;
        }
      }
    }}

    ${typography.body03R}
  `,

  Dot: styled.div<{ theme: { isActive: boolean } }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    ${({ theme: { isActive } }) =>
      getColor("background", isActive ? "gray900" : "grayDimmedEffectBlack30D")}

    cursor: pointer;
  `,

  BasicContainer: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,

  ArrowButton: styled.button`
    width: 32px;
    height: 32px;

    background: none;
    ${getColor("background", "white")}

    border: 1px solid;
    border-radius: 4px;
    ${getColor("border-color", "gray200")}

    cursor: pointer;

    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      ${getColor("background", "gray100")}
    }

    &:disabled {
      ${getColor("background", "white")}
      cursor: default;
    }
  `,

  BasicPageContainer: styled.div`
    display: flex;
    align-items: center;
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      ${typography.body03M}

      &:nth-of-type(1) {
        width: 24px;
        height: 24px;
      }
      &:nth-of-type(2) {
        ${getColor("color", "gray500")}
      }
      &:nth-of-type(3) {
        width: 24px;
        height: 24px;
        ${getColor("color", "gray500")}
      }
    }
  `,

  NumericPageContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  NumericPage: styled.span<{ theme: { isActive: boolean } }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${typography.body03M}

    width: 24px;
    height: 24px;

    cursor: pointer;

    ${({ theme: { isActive } }) =>
      isActive ? getColor("color", "gray900") : getColor("color", "gray500")}
  `,
};

export default PaginationStyledComponents;
