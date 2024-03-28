import styled from "styled-components";

import { getColor, typography } from "../../../foundations";

const TagStyledComponents = {
  Container: styled.div<{ theme: { isFilled: boolean; isCapsule: boolean } }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border: 1px solid;
    border-radius: ${({ theme: { isCapsule } }) =>
      isCapsule ? "100px" : "4px"};

    ${getColor("border-color", "gray200")}
    ${getColor("color", "gray600")}

    padding: 0px 8px;
    height: 24px;

    ${typography.body03M}

    ${({ theme: { isFilled } }) => {
      return getColor("background", isFilled ? "gray200" : "white");
    }}

    transition: 0.4s;
  `,
};

export default TagStyledComponents;
