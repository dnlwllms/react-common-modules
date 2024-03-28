import styled from "styled-components";

import { typography, getColor } from "../../foundations";

import CoreTable from "../../core/Table";

const APIDocsStyledComponents = {
  StyledTable: styled(CoreTable)`
    width: 100%;
    border-collapse: collapse;
    thead {
      text-align: left;

      th {
        ${typography.body02M}
        ${getColor("color", "gray600")}
        ${getColor("background-color", "gray100")}
        border-bottom: 1px solid;
        ${getColor("border-bottom-color", "gray200")}

        &:first-of-type {
          border-radius: 8px 0 0 0;
        }

        &:last-of-type {
          border-radius: 0 8px 0 0;
        }
      }
    }

    td,
    th {
      padding: 16px;
    }

    td {
      ${getColor("background-color", "white")}
      border-bottom: 1px solid;
      ${getColor("border-bottom-color", "gray200")}
      white-space: pre-wrap;
      word-break: keep-all;
      vertical-align: top;
      ${typography.body03M}

      &:first-of-type {
        div {
          ${typography.body02B}
          ${getColor("color", "gray900")}
        }
      }
      &:nth-of-type(2) {
        div {
          ${getColor("color", "gray900")}
        }
      }
      &:nth-of-type(3) {
        div {
          ${getColor("color", "gray600")}
        }
      }
      &:last-of-type {
        div {
          ${getColor("color", "gray600")}
        }
      }
    }
  `,
};

export default APIDocsStyledComponents;
