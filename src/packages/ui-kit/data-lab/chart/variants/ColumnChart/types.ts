import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface ColumnChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "stacked" | "grouped" | "diverging";
  step?: number;
  dataType?: ChartDataType;
}
