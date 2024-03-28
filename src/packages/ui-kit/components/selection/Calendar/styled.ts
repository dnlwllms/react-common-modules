import styled, { css } from "styled-components";

import { colors, getColor, typography } from "../../../foundations";

import { Tab } from "../../navigation";

const CalendarStyledComponents = {
  Container: styled.div`
    display: flex;

    * {
      user-select: none;
    }
  `,

  PickerArea: styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    width: 344px;
    height: fit-content;
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
      isRange?: boolean;
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

    ${({ theme: { isSpace, isRange, isSelected } }) => {
      if (isSpace) {
        return css`
          > span {
            ${getColor("color", isRange && isSelected ? "gray900" : "gray200")}
          }
        `;
      }
    }}

    ${({ theme: { isSelected, isRange } }) => {
      // 선택된 경우
      if (isSelected) {
        if (isRange) {
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

  SchedulerContainer: styled.div`
    display: flex;
    gap: 32px;
  `,

  SchedulerLeftArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  SchedulerRightArea: styled.div`
    width: 344px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  ScheduleGrid: styled.div`
    display: inline-grid;
    grid-template-columns: repeat(${({ theme: { grid } }) => grid}, 1fr);
    border-bottom: 1px solid ${colors.gray200};
  `,

  ScheduleGridItem: styled.div<{
    theme: { isDay?: boolean; isSpace?: boolean; isSelected?: boolean };
  }>`
    width: 174px;
    padding: 6px 12px;
    ${typography.body02M}

    border-top: 1px solid ${colors.gray200};

    ${({ theme: { isDay } }) => {
      if (!isDay) {
        return css`
          min-height: 100px;
        `;
      }
    }}
    ${({ theme: { isSelected } }) => {
      if (isSelected) {
        return css`
          ${getColor("background", "gray100")}
        `;
      }
    }}
  `,

  ScheduleDate: styled.span<{
    theme: {
      isSelected?: boolean;
      isDay?: boolean;
      isSpace?: boolean;
    };
  }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    border-radius: 50%;

    margin-bottom: 4px;

    ${({ theme: { isSpace } }) => {
      if (isSpace) {
        return css`
          ${getColor("color", "gray200")}
        `;
      }
    }}

    ${({ theme: { isDay } }) => {
      if (isDay) {
        return css`
          ${getColor("color", "gray500")};
        `;
      }
    }}

    ${({ theme: { isSelected } }) => {
      // 선택된 경우
      if (isSelected) {
        return css`
          ${getColor("color", "white")}
          ${getColor("background", "gray900")}
        `;
      }
    }}
  `,

  ScheduleArea: styled.div`
    border: 1px solid ${colors.gray200};
    border-radius: 8px;
    padding: 24px;
  `,
  ScheduleTitle: styled.div`
    margin-bottom: 16px;
    ${typography.body02M}
  `,

  ScheduleList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
  `,
  ScheduleListItem: styled.li<{ theme: { isSpace?: boolean } }>`
    padding: 0 8px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${typography.body03M};
    border-radius: 2px;
    ${({ theme: { isSpace } }) =>
      getColor("background", isSpace ? "gray500" : "data01")}
    ${getColor("color", "white")}
  `,
  ScheduleAddInfo: styled.div`
    ${getColor("color", "gray500")}

    ${typography.body03M}
  `,

  ScheduleDetailList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    list-style-type: none;
    padding: 0;
    margin: 0;

    max-height: 360px;
    overflow-y: auto;
  `,

  ScheduleDetailListItem: styled.li`
    display: flex;
    gap: 8px;

    width: 100%;
    height: 60px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 4px;

      padding: 8px 0;

      .title {
        ${typography.body02M}
        ${getColor("color", "black")}
      }

      .date {
        ${typography.body03M}
        ${getColor("color", "gray500")}
      }
    }

    &:before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 100%;
      border-radius: 100px;
      ${getColor("background", "data01")}
    }
  `,
};

export default CalendarStyledComponents;
