import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";
import { EmptySize } from "./types";

const EmptyStyledComponents = {
  Container: styled.div<{ theme: { size: EmptySize } }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    ${({ theme }) => {
      switch (theme.size) {
        case "small": {
          return css`
            padding: 10px 0;

            svg {
              width: 16px;
              height: 16px;
            }
          `;
        }
        case "medium":
        default: {
          return css`
            svg {
              width: 24px;
              height: 24px;
            }

            padding: 15px 0;
          `;
        }
      }
    }}

    p {
      margin: 0;
      ${getColor("color", "gray500")}

      ${({ theme }) => {
        switch (theme.size) {
          case "small": {
            return css`
              ${typography.body02R}
            `;
          }
          case "medium":
          default: {
            return css`
              ${typography.heading03R}
            `;
          }
        }
      }}
    }
  `,
};

export default EmptyStyledComponents;
