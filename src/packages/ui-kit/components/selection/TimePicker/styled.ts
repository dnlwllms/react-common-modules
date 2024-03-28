import styled from "styled-components";
import { colors, getColor, typography } from "../../../foundations";

const TimePickerStyledComponents = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid;
    ${getColor("border-color", "gray200")}
    border-radius: 8px;

    box-sizing: border-box;

    ${getColor("background", "white")}
    max-height: 422px;
  `,

  Header: styled.header`
    display: flex;
    flex-direction: column;
    height: 56px;
  `,

  DateArea: styled.div`
    text-align: center;
    ${typography.body03R}
    ${getColor("color", "gray800")}
  `,

  TimeArea: styled.div`
    text-align: center;
    ${typography.body02M}
    ${getColor("color", "gray800")}
  `,

  SelectArea: styled.div`
    display: flex;
    padding: 4px 0 12px 0;
    height: calc(100% - 88px);

    gap: 8px;
  `,

  TimeRow: styled.div<{ theme: { hasDate?: boolean } }>`
    display: flex;
    flex-direction: column;
    gap: 2px;

    width: 44px;

    overflow: hidden;

    &:hover {
      overflow-y: scroll;
    }

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 0.08;
      border-radius: 1px;
      ${getColor("background-color", "gray900")}
    }
    &::-webkit-scrollbar-track {
    }
  `,

  LabelContainer: styled.div`
    display: flex;
    margin-top: auto;
    gap: 8px;

    > span {
      width: 44px;
      text-align: center;
      ${getColor("color", "gray500")}
      ${typography.body04R}
    }
  `,

  TimeButton: styled.button<{ theme: { isSelected?: boolean } }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 44px;
    height: 32px;
    border: none;
    background: ${({ theme: { isSelected } }) =>
      isSelected ? colors.gray200 : "none"};
    ${getColor("color", "gray900")}
    ${typography.body02M}
    border-radius: 4px;
    cursor: pointer;
    padding: 0;
  `,

  Footer: styled.footer`
    display: flex;
    justify-content: flex-end;
    height: 32px;
    padding-top: 8px;
  `,
};

export default TimePickerStyledComponents;
