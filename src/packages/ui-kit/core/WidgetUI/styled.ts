import styled from "styled-components";

const WidgetUIStyledComponents = {
  Container: styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    overflow: hidden;

    user-select: none;
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
  `,

  Highlighter: styled.div`
    position: fixed;
    border: 1px solid gray;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 0.6s;

    transition: 0.3s;
  `,
};

export default WidgetUIStyledComponents;
