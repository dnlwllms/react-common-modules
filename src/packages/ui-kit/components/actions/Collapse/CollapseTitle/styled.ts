import styled, { css } from "styled-components";
import { CollapseSize } from "../types";

export const CollapseTitleStyledComponents = {
  Title: styled.span<{ theme: { size: CollapseSize; isOpen: boolean } }>`
    display: flex;
    align-items: center;
    svg {
      transition: 0.2s;
    }

    ${({ theme: { size } }) => {
      switch (size) {
        case "small": {
          return css`
            height: 24px;
            font-size: 12px;

            svg {
              width: 12px;
              height: 12px;
            }
          `;
        }
        case "large": {
          return css`
            height: 40px;
            font-size: 16px;
            gap: 4px;

            svg {
              width: 16px;
              height: 16px;
            }
          `;
        }
        case "medium":
        default: {
          return css`
            height: 32px;
            font-size: 14px;
            gap: 2px;

            svg {
              width: 14px;
              height: 14px;
            }
          `;
        }
      }
    }}

    ${({ theme: { isOpen } }) => {
      if (isOpen) {
        return css`
          svg {
            transform: rotate(180deg);
          }
        `;
      } else {
        return css`
          svg {
            transform: rotate(0deg);
          }
        `;
      }
    }}
  `,
};

export default CollapseTitleStyledComponents;
