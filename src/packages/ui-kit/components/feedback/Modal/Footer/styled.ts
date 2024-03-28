import styled, { css } from "styled-components";
import { ModalSize } from "../types";

const FooterStyledComponents = {
  Container: styled.footer<{ theme: { size: ModalSize } }>`
    ${({ theme: { size } }) => {
      switch (size) {
        case "large":
          return css`
            padding: 32px;
          `;
        case "x-large":
          return css`
            padding: 40px;
          `;
        case "medium":
        default:
          return css`
            padding: 24px;
          `;
      }
    }}
  `,

  ButtonGroup: styled.div<{ theme: { size: ModalSize } }>`
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;

    ${({ theme: { size } }) => {
      if (size === "medium") {
        return css`
          flex-direction: column;
        `;
      }
    }}
  `,
};

export default FooterStyledComponents;
