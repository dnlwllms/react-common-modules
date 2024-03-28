import styled, { css } from "styled-components";
import { getColor, typography } from "../../../foundations";
import { UploadProps } from "./types";

const UploadStyledComponents = {
  Container: styled.div`
    display: inline-block;
    width: inherit;
  `,

  DragArea: styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed;
    border-radius: 6px;
    ${getColor("border-color", "gray200")}
    ${getColor("color", "gray500")}
    ${typography.body02M}
    > span {
      margin: 4px 0 8px;
      text-align: center;
    }
  `,

  ProgressContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  ProgressInfoArea: styled.div<{
    theme: { isFinished: boolean };
  }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      &:first-of-type {
        ${typography.body02M}
        ${getColor("color", "gray900")}
      }
      &:last-of-type {
        ${typography.body04R}
        ${({ theme: { isFinished } }) =>
          getColor("color", isFinished ? "gray900" : "gray500")}
      }
    }
  `,

  ProgressBar: styled.div<{
    theme: { progress: number; isFail: boolean; isFinished: boolean };
  }>`
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 100px;
    overflow: hidden;
    ${getColor("background", "gray200")}
    &:after {
      content: "";
      position: absolute;
      width: ${({ theme: { progress } }) => progress}%;
      height: 100%;
      top: 0;
      left: 0;
      ${({ theme: { isFail, isFinished } }) =>
        getColor("background", !isFinished && isFail ? "red500" : "gray900")}
      transition: 0.2s;
      border-radius: 100px;
    }
  `,

  StyledLabel: styled.label`
    position: relative;
    display: inline-flex;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `,

  FileList: styled.ul<{ theme: { size: UploadProps["size"] } }>`
    padding: 0;
    margin: 0;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 4px;
    ${({ theme: { size } }) => {
      switch (size) {
        case "small": {
          return css`
            padding: 4px;
          `;
        }
        case "medium":
        default: {
          return css`
            padding: 8px;
          `;
        }
      }
    }}
  `,

  FileListItem: styled.li`
    height: fit-content;

    border-radius: 4px;

    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
    gap: 4px;
    padding: 4px 8px;
    ${typography.body03R}
    ${getColor("color", "gray900")}

    .success {
      ${getColor("color", "blue500")}
    }
    .fail {
      ${getColor("color", "red500")}
    }

    .close {
      display: inline-flex;
      align-items: center;
      width: 0;
      padding-right: 16px;
      cursor: pointer;
    }

    &:hover {
      ${getColor("background", "gray100")}

      .close {
        width: auto;
        padding-left: 4px;
        padding-right: 0;
        align-items: center;
      }
    }
  `,

  DraggableFileList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;
  `,

  DraggableFileListItem: styled.li`
    width: 100%;
    display: flex;

    .profile {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      border: 1px solid;
      ${getColor("border-color", "gray200")}
      margin-right: 8px;
    }

    .info {
      display: flex;
      flex-direction: column;
      width: calc(100% - 96px);

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        ${typography.body02M}
        ${getColor("color", "gray900")}
      }
      .size {
        ${typography.body04R}
        ${getColor("color", "gray500")}
      }
    }
  `,
};

export default UploadStyledComponents;
