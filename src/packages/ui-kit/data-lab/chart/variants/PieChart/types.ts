import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface PieChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "donut" | "polar";
  step?: number;
  dataType?: ChartDataType;
}
