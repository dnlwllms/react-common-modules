import styled from "styled-components";
import { getColor } from "../../foundations";

const PlaygroundStyledComponent = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

  `,

  Body: styled.div`
    display: flex;
  `,

  ComponentArea: styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 480px;
    border: 1px solid;
    border-radius: 8px;
    overflow: auto;

    ${getColor("background", "white")}
    ${getColor("border-color", "gray200")}
  `,

  ErrorArea: styled.div`
    ${getColor("color", "red500")}
  `,
};

export default PlaygroundStyledComponent;
