import styled from "styled-components";

const SpinnerStyledComponents = {
  Container: styled.div<{ theme: { size: number } }>`
    width: ${({ theme }) => theme.size}px;
    height: ${({ theme }) => theme.size}px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    > div {
      width: ${({ theme }) => theme.size}px;
      height: ${({ theme }) => theme.size}px;

      display: inline-flex;
      justify-content: center;
      align-items: center;

      #lottie {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        width: ${({ theme }) => theme.size}px;
        height: ${({ theme }) => theme.size}px;
      }
    }
  `,
};

export default SpinnerStyledComponents;
