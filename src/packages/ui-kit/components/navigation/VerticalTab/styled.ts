import styled from "styled-components";

import { getColor, typography } from "../../../foundations";

const VerticalTabStyledComponents = {
  Container: styled.div`
    position: relative;
    display: inline-block;
  `,

  VerticalTabList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
  `,

  VerticalTabListItem: styled.li<{
    theme: { isActive: boolean };
  }>`
    display: flex;
    align-items: center;
    gap: 0 8px;
    width: 100%;

    white-space: nowrap;

    cursor: pointer;

    border-right: 1px solid;
    ${getColor("border-right-color", "gray200")}
    ${({ theme: { isActive } }) =>
      getColor("color", isActive ? "gray900" : "gray500")}
    height: 40px;
    padding: 0 24px;
    ${typography.body01M}
  `,

  VerticalTabListIcon: styled.div<{
    theme: { isActive: boolean };
  }>`
    display: flex;

    svg {
      width: 16px;
      height: 16px;
      path {
        ${({ theme: { isActive } }) =>
          getColor("fill", isActive ? "gray900" : "gray500")}
      }
    }
  `,

  Indicator: styled.div`
    display: inline-block;
    width: 2px;
    ${getColor("background", "gray900")}
    position: absolute;

    right: 0;
    transition: 0.4s;
  `,
};

export default VerticalTabStyledComponents;
