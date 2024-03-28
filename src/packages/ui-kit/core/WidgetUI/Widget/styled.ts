import styled, { css } from "styled-components";

const WidgetStyledComponents = {
  Container: styled.div<{ coordinate?: [number, number] }>`
    cursor: pointer;

    ${({ coordinate }) => {
      if (!!coordinate) {
        return css`
          position: absolute;

          left: ${coordinate[0]}px;
          top: ${coordinate[1]}px;
        `;
      } else {
        return css`
          position: relative;
        `;
      }
    }}

    &:hover {
      > button {
        opacity: 1;
      }
    }
  `,

  CloseButton: styled.button`
    opacity: 0;

    margin: 0;
    padding: 0;

    position: absolute;
    top: 4px;
    left: 4px;
    background: none;
    border: none;

    width: 24px;
    height: 24px;

    > * {
      width: inherit;
      height: inherit;
    }

    cursor: pointer;

    transition: 0.3s;
  `,
};

export default WidgetStyledComponents;
