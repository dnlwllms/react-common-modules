import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface ComboChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "line-scatter";
  step?: number;
  dataType?: ChartDataType;
}
