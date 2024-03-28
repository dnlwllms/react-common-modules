import styled from "styled-components";

const WidgetListStyledComponents = {
  Container: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    gap: 16px;

    width: 50%;
    height: 30%;

    background: rgba(0, 0, 0, 0.4);

    border-radius: 12px 12px 0 0;

    overflow: scroll;

    @keyframes mountEffect {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    animation: mountEffect 0.6s;
  `,
};

export default WidgetListStyledComponents;
