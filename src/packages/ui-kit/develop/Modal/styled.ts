import styled from "styled-components";

const ModalStyledComponents = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Dim: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
  `,

  StyledModal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  `,
};

export default ModalStyledComponents;
