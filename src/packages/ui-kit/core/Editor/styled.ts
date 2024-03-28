import styled from "styled-components";

const EditorStyledComponents = {
  Container: styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    overflow: auto;

    white-space: pre-wrap;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  Footer: styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #aaa;

    padding: 12px 20px;

    display: flex;
    justify-content: flex-end;
  `,

  RowContainer: styled.div`
    display: flex;
    align-items: center;

    position: relative;

    border-radius: 4px;

    padding: 0px 0px 0px 80px;

    cursor: pointer;

    word-break: break-all;

    transition: 0.2s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1400px) {
      padding: 0;
    }
  `,

  MenuButton: styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: no-repeat center/cover
      url(https://www.svgrepo.com/show/511004/hamburger-md.svg);

    cursor: pointer;
  `,

  PlusButton: styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: no-repeat center/cover
      url(https://www.svgrepo.com/show/510136/plus.svg);

    cursor: pointer;
  `,

  MinusButton: styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: no-repeat center/cover
      url(https://www.svgrepo.com/show/510074/minus.svg);

    cursor: pointer;
  `,

  RowButtonGroup: styled.div<{ visible: boolean }>`
    display: flex;
    position: absolute;
    top: 4px;
    left: 0;

    height: 20px;

    gap: 4px;

    opacity: ${({ visible }) => (visible ? 1 : 0)};

    @media (max-width: 1400px) {
      display: none;
    }
  `,

  ToolPopupContainer: styled.div`
    position: absolute;
    background: #ffffff;

    width: 260px;
    height: 300px;
    overflow: auto;

    padding: 12px;

    border-radius: 8px;

    box-shadow: rgba(0, 0, 33, 0.07) 0px 16px 22.4px 4.8px,
      rgba(0, 0, 33, 0.05) 0px 3.2px 16px 0px,
      rgba(0, 0, 33, 0.07) 0px 0px 1px 0px;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        padding: 10px 0;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  `,

  FieldContainer: styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    span {
      flex-shrink: 0;
      width: 160px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    textarea {
      width: 100%;
      height: 80px;
      font-size: 14px;
    }
  `,
  ErrorMessage: styled.div`
    display: flex;
    justify-content: flex-end;

    color: red;
  `,
};

export default EditorStyledComponents;
