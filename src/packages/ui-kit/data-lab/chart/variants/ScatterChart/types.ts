import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface ScatterChartProps
  extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "bubble";
  step?: number;
  dataType?: ChartDataType;
}
