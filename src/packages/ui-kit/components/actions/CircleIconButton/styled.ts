import styled, { css } from "styled-components";

import IconButton from "../IconButton";
import { getColor } from "../../../foundations";

const CircleIconButtonStyledComponents = {
  StyledButton: styled(IconButton)<{ theme: { isActive: boolean } }>`
    border-radius: 100px;

    width: 40px;
    height: 40px;

    &:hover {
      ${getColor("background-color", "gray100")}
    }

    > svg {
      width: 20px;
      height: 20px;

      //TODO. 현재 아이콘 사이즈 고정 > 추후 디자인팀 아이콘 사이즈 논의 필요
    }

    ${({ theme: { isActive } }) => {
      if (isActive) {
        return css`
          ${getColor("background-color", "gray100")}
        `;
      }
    }}
  `,
};

export default CircleIconButtonStyledComponents;
