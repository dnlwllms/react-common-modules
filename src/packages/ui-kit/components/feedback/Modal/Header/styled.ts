import styled, { css } from "styled-components";
import { ModalSize } from "../types";
import { typography } from "../../../../foundations";

const HeaderStyledComponents = {
  Container: styled.header<{ theme: { size: ModalSize } }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    span {
      cursor: pointer;
    }

    ${({ theme: { size } }) => {
      switch (size) {
        case "large":
          return css`
            padding: 32px 32px 0 32px;
            h2 {
              ${typography.heading04B}
            }

            svg {
              width: 24px;
              height: 24px;
            }
          `;
        case "x-large":
          return css`
            padding: 40px 40px 0 40px;
            h2 {
              ${typography.heading03B}
            }

            svg {
              width: 32px;
              height: 32px;
            }
          `;
        case "medium":
        default:
          return css`
            padding: 24px 24px 0 24px;
            h2 {
              ${typography.body01B}
            }

            svg {
              width: 24px;
              height: 24px;
            }
          `;
      }
    }}
  `,
};

export default HeaderStyledComponents;
