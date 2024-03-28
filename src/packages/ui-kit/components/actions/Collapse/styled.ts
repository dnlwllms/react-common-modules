import styled from "styled-components";
import { getColor } from "../../../foundations";

export const CollapseStyledComponents = {
  Container: styled.button`
    display: flex;
    align-items: center;
    padding: 0 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:disabled {
      cursor: default;

      span {
        ${getColor("color", "gray200")};

        svg {
          path {
            ${getColor("fill", "gray200")};
          }
        }
      }
    }
  `,
};
