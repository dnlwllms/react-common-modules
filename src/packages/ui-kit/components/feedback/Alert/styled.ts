import styled, { css } from "styled-components";

import { Button } from "../../actions";
import { AlertType } from "./types";

import { getColor, typography } from "../../../foundations";

const AlertStyledComponents = {
  Container: styled.div<{ theme: { alertType: AlertType } }>`
    width: 500px;
    height: 162px;
    padding: 24px;
    border-radius: 16px;

    ${({ theme: { alertType } }) => {
      switch (alertType) {
        case "error": {
          return css`
            ${getColor("background-color", "red500")}
          `;
        }
        case "caution": {
          return css`
            ${getColor("background-color", "orange500")}
          `;
        }
      }
    }}
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      margin: 0;
      ${typography.heading04B}
      ${getColor("color", "white")}
    }

    button {
      svg {
        path {
          ${getColor("fill", "white")}
        }
      }
    }
  `,
  Body: styled.div`
    padding: 4px 0 16px 0;
    ${typography.body01M}
    ${getColor("color", "white")}
  `,

  Footer: styled.div``,

  AlertButton: styled(Button)<{ theme: { alertType: AlertType } }>`
    ${getColor("background-color", "white")}
    font-weight: 500;
    ${getColor("border-color", "white")}

    &:hover {
      ${getColor("background-color", "white")}
      ${getColor("border-color", "white")}
    }

    ${({ theme: { alertType } }) => {
      switch (alertType) {
        case "error": {
          return css`
            ${getColor("color", "red500")}
          `;
        }
        case "caution": {
          return css`
            ${getColor("color", "orange500")}
          `;
        }
      }
    }}
  `,
};

export default AlertStyledComponents;
