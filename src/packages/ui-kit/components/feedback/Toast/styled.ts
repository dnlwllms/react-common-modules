import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";
import { ToastColor, ToastSize } from "./types";

const ToastStyledComponents = {
  Container: styled.div<{
    theme: { color: ToastColor; size: ToastSize };
  }>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => {
      switch (theme.color) {
        case "white":
          return css`
            ${getColor("background", "white")}
            ${getColor("color", "gray900")}
            opacity: 0.6;
            box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
          `;
        case "black":
        default:
          return css`
            ${getColor("background", "grayDimmedEffectBlack70D")}
            ${getColor("color", "white")}
          `;
      }
    }}

    ${({ theme: { size } }) => {
      switch (size) {
        case "large":
          return css`
            width: 360px;
            padding: 12px 32px;

            border-radius: 8px;
            ${typography.body01M}
          `;
        case "medium":
        default:
          return css`
            width: 240px;
            padding: 12px 24px;

            border-radius: 6px;
            ${typography.body02M}
          `;
      }
    }}
    
    max-width: calc(100% - 40px);

    z-index: 10;

    > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
      overflow: hidden;
      word-break: keep-all;
    }

    @keyframes toast {
      0% {
        transform: translateY(200%);
        opacity: 1;
      }
      20% {
        transform: translateY(0);
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,
  PortalContainer: styled.div`
    position: fixed;
    bottom: 35px;
    margin: auto;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    transition: 0.4s;
  `,
};

export default ToastStyledComponents;
