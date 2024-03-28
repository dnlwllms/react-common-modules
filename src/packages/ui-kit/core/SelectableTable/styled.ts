import styled, { css } from "styled-components";
import Table from "../Table";
import { CellState } from "./types";

const SelectableTableStyledComponents = {
  Container: styled.div`
    position: relative;
    overflow: hidden;
  `,
  StyledTable: styled(Table)`
    user-select: none;

    cursor: grab;

    border-spacing: 0;

    &:active {
      cursor: grabbing;
    }
  `,

  StyledTableCell: styled.td<{
    state: CellState;
  }>`
    ${({ state }) => {
      switch (state) {
        case "startPoint": {
          return css`
            background: blue;
          `;
        }
        case "endPoint": {
          return css`
            background: red;
          `;
        }
        case "selected": {
          return css`
            background: yellow;
          `;
        }
        default: {
          return css``;
        }
      }
    }}
  `,

  VirtualTableContainer: styled.div`
    position: absolute;
    top: 100%;
    opacity: 0;
  `,
};

export default SelectableTableStyledComponents;
