import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";

const badgeStyle = css`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;

  ${getColor("color", "white")}
  ${getColor("background", "red500")}
`;

const BadgeStyledComponents = {
  Container: styled.div`
    position: relative;
    display: inline-flex;
  `,

  BadgeArea: styled.div<{ theme: { length: number } }>`
    min-width: 16px;
    height: 16px;
    ${({ theme: { length } }) => {
      if (length > 1) {
        return css`
          padding: 0 6px;
        `;
      }
    }}

    border-radius: 8px;

    ${typography.body04R}
    line-height: 1;

    ${badgeStyle}
  `,

  SmallBadgeArea: styled.div`
    width: 4px;
    height: 4px;

    border-radius: 50%;

    ${badgeStyle}
  `,
};

export default BadgeStyledComponents;
