import styled, { css } from "styled-components";

import { getColor, typography } from "../../../foundations";

import { Tab } from "../../navigation";

const DatePickerStyledComponents = {
  Container: styled.div`
    display: flex;
  `,

  DatePickerArea: styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    width: 344px;
    user-select: none;

    border: 1px solid;
    border-radius: 8px;
    ${getColor("border-color", "gray200")}
    ${getColor("background", "white")}

    padding: 24px;
  `,

  SelectArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ArrowButtonGroup: styled.div`
    display: flex;
    gap: 12px;
  `,

  DateArea: styled.div`
    display: inline-flex;
    gap: 8px;
    ${typography.body02M}

    cursor: pointer;
  `,

  ArrowButton: styled.button`
    display: flex;
    width: 32px;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: 1px solid;
    border-radius: 4px;
    ${getColor("border-color", "gray200")}

    ${getColor("background", "white")}
  `,

  GridArea: styled.div<{ theme: { grid: number } }>`
    display: inline-grid;
    grid-template-columns: repeat(${({ theme: { grid } }) => grid}, 1fr);
    gap: 8px 0px;
  `,

  GridItem: styled.div<{
    theme: {
      hasRange?: boolean;
      isSelected?: boolean;
      isDay?: boolean;
      isSpace?: boolean;
      isFirst?: boolean;
      isLast?: boolean;
    };
  }>`
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    > span {
      display: inline-flex;

      border-radius: 4px;

      width: 32px;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    &::before {
      content: "";
      flex: 1;
      width: 100%;
      height: 100%;
    }

    &::after {
      content: "";
      flex: 1;
      width: 100%;
      height: 100%;
    }

    ${({ theme: { isDay } }) => {
      // 요일 스타일
      if (isDay) {
        return css`
          > span {
            ${getColor("color", "gray500")};
            ${typography.body02M}
          }
        `;
        // 날짜 스타일
      } else {
        return css`
          cursor: pointer;
          > span {
            ${typography.body02R}
          }
          &:hover {
            > span {
              border: 1px solid;
              ${getColor("border-color", "gray900")}
            }
          }
        `;
      }
    }}

    ${({ theme: { isSpace, hasRange, isSelected } }) => {
      if (isSpace) {
        return css`
          > span {
            ${getColor("color", hasRange && isSelected ? "gray900" : "gray200")}
          }
        `;
      }
    }}

    ${({ theme: { isSelected, hasRange } }) => {
      // 선택된 경우
      if (isSelected) {
        if (hasRange) {
          return css`
            ${getColor("background", "gray200")}
          `;
        } else {
          return css`
            > span {
              ${getColor("color", "white")}
              ${getColor("background", "gray900")}
            }
          `;
        }
      }
    }}

    ${({ theme: { isFirst } }) => {
      if (isFirst) {
        return css`
          > span {
            ${getColor("color", "white")}
            ${getColor("background", "gray900")}
          }

          &::before {
            ${getColor("background", "white")}
          }
        `;
      }
    }}

    ${({ theme: { isLast } }) => {
      if (isLast) {
        return css`
          > span {
            ${getColor("color", "white")}
            ${getColor("background", "gray900")}
          }

          &::after {
            ${getColor("background", "white")}
          }
        `;
      }
    }}
  `,

  StyledTab: styled(Tab)`
    ul {
      width: 100%;
      li {
        flex: 1;
      }
    }
  `,

  Footer: styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  QuickActionButtonGroup: styled.div`
    display: flex;
    gap: 6px;
  `,
};

export default DatePickerStyledComponents;
