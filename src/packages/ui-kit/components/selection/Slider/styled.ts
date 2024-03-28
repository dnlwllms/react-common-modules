import styled from "styled-components";
import { getColor, typography } from "../../../foundations";

const SliderStyledComponents = {
  Container: styled.div`
    user-select: none;
  `,

  Bar: styled.div`
    position: relative;

    min-width: 100px;
    height: 4px;

    ${getColor("background", "gray200")}
  `,

  Fill: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    height: inherit;
    transition: 0.1s linear;

    ${getColor("background", "gray800")}
  `,

  Point: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    width: 24px;
    height: 24px;
    border-radius: 50%;

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

    ${getColor("background", "white")}

    cursor: pointer;
  `,

  LabelContainer: styled.div<{ theme: { isDisabled?: boolean } }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    ${typography.body04R}

    ${({ theme: { isDisabled } }) =>
      getColor("color", isDisabled ? "gray400" : "gray900")}
  `,
};

export default SliderStyledComponents;
