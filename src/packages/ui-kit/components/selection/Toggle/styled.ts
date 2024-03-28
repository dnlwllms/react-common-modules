import styled from "styled-components";
import { getColor } from "../../../foundations";

const ToggleStyledComponents = {
  Container: styled.div``,

  SwitchContainer: styled.div<{ theme: { isOn?: boolean } }>`
    width: 44px;
    height: 24px;

    box-sizing: border-box;

    border-radius: 100px;

    padding: 2px;

    cursor: pointer;

    ${({ theme: { isOn } }) =>
      getColor("background", isOn ? "gray900" : "gray200")}

    > div {
      transform: ${({ theme: { isOn } }) =>
        isOn ? "translateX(100%)" : "translateX(0)"};
      transition: 0.2s linear;
    }

    transition: 0.2s linear;
  `,

  Point: styled.div`
    width: 20px;
    height: 20px;

    border-radius: 10px;

    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);

    ${getColor("background", "white")}
  `,
};

export default ToggleStyledComponents;
