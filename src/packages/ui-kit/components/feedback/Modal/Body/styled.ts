import styled, { css } from "styled-components";
import { ModalSize } from "../types";
import { getColor, typography } from "../../../../foundations";

const BodyStyledComponents = {
  Container: styled.div<{ theme: { size: ModalSize } }>`
    ${getColor("color", "gray900")}

    ${({ theme: { size } }) => {
      switch (size) {
        case "large":
          return css`
            padding: 24px 32px 0;

            ${typography.body02R}
          `;
        case "x-large":
          return css`
            padding: 24px 40px 0;

            ${typography.body01R}
          `;
        case "medium":
        default:
          return css`
            padding: 16px 24px 0;

            ${typography.body03R}
          `;
      }
    }}
  `,
};

export default BodyStyledComponents;
