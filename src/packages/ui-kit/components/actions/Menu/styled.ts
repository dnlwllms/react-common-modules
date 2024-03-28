import styled from "styled-components";

import { getColor, typography } from "../../../foundations";

const MenuStyledComponents = {
  Container: styled.div`
    width: 160px;
    padding: 24px;
    ${getColor("background-color", "white")}
    border-radius: 8px;
    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.1);
  `,

  Title: styled.div`
    ${getColor("color", "gray900")}
    ${typography.body02B}
  `,

  List: styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      margin-top: 14px;
    }
  `,
};

export default MenuStyledComponents;
