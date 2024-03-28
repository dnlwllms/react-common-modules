import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";
import { TabSize, TabType } from "./types";

const TabStyledComponents = {
  Container: styled.div<{ theme: { type: TabType; size: TabSize } }>`
    position: relative;
    display: inline-block;
    width: 100%;
    z-index: 0;

    ${({ theme }) => {
      if (theme.type === "box") {
        return css`
          ${getColor("background", "gray200")}
          border-radius: 6px;
          padding: 4px;
        `;
      }
    }}

    ${({ theme }) => {
      if (theme.type === "text") {
        return css`
          &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: calc(100% - 4px);
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              #fff 81%
            );
            z-index: 1;
          }
        `;
      }
    }}
  `,

  Wrap: styled.div`
    position: relative;
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  TabList: styled.ul<{ theme: { type: TabType; size: TabSize } }>`
    position: relative;
    display: inline-flex;

    list-style-type: none;
    margin: 0;
    padding: 0;

    border-bottom: 1px solid;
    ${getColor("border-bottom-color", "gray200")}

    min-width: 100%;
    width: fit-content;
  `,
  TabListItem: styled.li<{
    theme: { type: TabType; size: TabSize; isActive: boolean };
  }>`
    display: flex;
    justify-content: center;
    align-items: center;

    white-space: nowrap;

    z-index: 1;

    cursor: pointer;

    ${({ theme }) => {
      const textStyle = css``;

      const boxStyle = css`
        ${getColor("color", theme.isActive ? "gray900" : "gray600")}
      `;

      switch (theme.type) {
        case "text":
          switch (theme.size) {
            case "small":
              return css`
                ${textStyle}
                height: 32px;
                padding: 0 16px;
                ${typography.body02M}
              `;
            case "large":
              return css`
                ${textStyle}
                height: 48px;
                padding: 0 32px;
                ${typography.body01M}
              `;
            case "medium":
            default: {
              return css`
                ${textStyle}
                height: 40px;
                padding: 0 24px;
                ${typography.body02M}
              `;
            }
          }
        case "box":
          switch (theme.size) {
            case "small":
              return css`
                ${boxStyle}
                height: 24px;
                padding: 0 8px;
                ${typography.body03R}
              `;
            case "large":
              return css`
                ${boxStyle}
                height: 40px;
                padding: 0 16px;
                ${typography.body02M}
              `;
            case "medium":
            default: {
              return css`
                ${boxStyle}
                height: 32px;
                padding: 0 8px;
                ${typography.body02M}
              `;
            }
          }
      }
    }}
  `,
  Indicator: styled.div<{ theme: { type: TabType; size: TabSize } }>`
    display: inline-block;

    position: absolute;

    bottom: 0;
    transition: 0.4s;

    ${({ theme }) => {
      if (theme.type === "text") {
        return css`
          height: 2px;
          ${getColor("background", "gray900")}
        `;
      } else if (theme.type === "box") {
        const boxStyle = css`
          top: 0;
          margin: auto;
          border-radius: 8px;
          ${getColor("background", "white")}
        `;
        switch (theme.size) {
          case "small":
            return css`
              ${boxStyle}
              height: 24px;
            `;
          case "large":
            return css`
              ${boxStyle}
              height: 40px;
            `;
          case "medium":
          default: {
            return css`
              ${boxStyle}
              height: 32px;
            `;
          }
        }
      }
    }}
  `,
};

export default TabStyledComponents;
