import styled, { css } from "styled-components";
import { ModalSize } from "./types";
import { getColor } from "../../../foundations";

const ModalStyledComponents = {
  Container: styled.div<{ theme: { size: ModalSize } }>`
    box-sizing: border-box;

    ${({ theme: { size } }) => {
      switch (size) {
        case "large":
          return css`
            width: 360px;

            border-radius: 12px;
          `;
        case "x-large":
          return css`
            width: 540px;

            border-radius: 12px;
          `;
        case "medium":
        default:
          return css`
            width: 240px;

            border-radius: 8px;
          `;
      }
    }}

    max-width: 90vw;
    max-height: 90vh;

    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.1);

    ${getColor("background", "white")}
  `,
};

export default ModalStyledComponents;
