import styled, { css } from "styled-components";

import { getColor, typography } from "../../../foundations";

const BreadcrumbStyledComponents = {
  Container: styled.ul`
    display: flex;
    align-items: center;
    gap: 0 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  `,

  ListItem: styled.li<{ theme: { link?: string } }>`
    &:first-of-type {
      a {
        svg {
          path {
            ${({ theme: { link } }) => {
              if (!link) {
                return css`
                  ${getColor("fill", "gray200")}
                `;
              } else {
                return css`
                  ${getColor("fill", "gray500")}
                `;
              }
            }}
          }
        }
        span {
          overflow: hidden;
          width: 1px;
          height: 1px;
          margin: -1px;
          position: absolute;
          clip: rect(0 0 0 0);
        }
      }
    }
    &:not(:first-of-type) {
      display: flex;
      align-items: center;
      gap: 0 4px;

      svg {
        path {
          ${getColor("fill", "gray300")}
        }
      }

      a {
        ${typography.body03M}
        ${getColor("color", "gray500")}



        ${({ theme: { link } }) => {
          if (!link) {
            return css`
              ${getColor("color", "gray200")}
            `;
          }
        }}
      }
    }

    a {
      text-decoration: none;

      ${({ theme: { link } }) => {
        if (!link) {
          return css`
            cursor: pointer;
            pointer-events: none;
          `;
        }
      }}
    }
  `,
};

export default BreadcrumbStyledComponents;
