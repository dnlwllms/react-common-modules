import styled from "styled-components";

import { getColor, typography } from "../../../foundations";

import Table from "../../../core/Table";

const DataGridStyledComponents = {
  Container: styled.div`
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
  `,
  ControlContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;

    > div {
      &:nth-of-type(1) {
        display: flex;
        align-items: center;
      }
      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  `,
  ControlDivider: styled.div`
    width: 1px;
    height: 12px;
    ${getColor("background", "gray200")}
  `,
  TableContainer: styled.div`
    margin-bottom: 24px;
  `,
  StyledTable: styled(Table)`
    position: relative;

    border-collapse: separate;
    border-spacing: 0;

    width: 100%;

    thead {
      background: white;

      position: sticky;
      top: 0;

      tr {
        th {
          border-top: 1px solid;
          border-bottom: 1px solid;
          ${getColor("border-color", "gray200")}

          padding: 12px 16px;

          ${typography.body02M}
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid;
        ${getColor("border-color", "gray100")}

        ${typography.body02R}

        td {
          padding: 12px 16px;

          text-align: center;
        }
      }
    }
  `,

  StyledSubTable: styled(Table)`
    position: relative;

    border-collapse: separate;
    border-spacing: 0;
    border-radius: 8px 8px 0 0;

    overflow: hidden;

    width: 100%;

    thead {
      background: white;

      position: sticky;
      top: 0;

      tr {
        th {
          border-top: 1px solid;
          border-bottom: 1px solid;
          ${getColor("border-color", "gray200")}
          ${getColor("background", "gray100")}

          padding: 10px 16px;

          ${typography.body02M}
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid;
        ${getColor("border-color", "gray100")}

        ${typography.body02R}

        td {
          padding: 10px 16px;

          text-align: center;
        }
      }
    }
  `,
  PaginationContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
};

export default DataGridStyledComponents;
