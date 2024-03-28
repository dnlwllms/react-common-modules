import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface BarChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "stacked" | "grouped" | "diverging";
  dataType?: ChartDataType;
}
