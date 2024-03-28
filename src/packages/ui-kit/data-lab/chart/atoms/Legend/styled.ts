import styled from "styled-components";
import { getColor, typography } from "../../../../foundations";

const LegendStyledComponents = {
  Container: styled.div`
    margin-bottom: 40px;
  `,
  LegendList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;

    list-style-type: none;

    padding: 0;
    margin: 0;
  `,

  LegendListItem: styled.li`
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      ${typography.body03M}
      ${getColor("color", "gray400")}
    }
  `,

  Point: styled.div`
    display: inline-block;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 4px;
  `,
};

export default LegendStyledComponents;
