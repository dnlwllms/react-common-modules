import { ChartJSProps } from "../../ChartJS";

import { ChartDataType } from "../../types";

export interface LineChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "multi" | "area" | "dashed" | "point" | "segment";
  step?: number;
  dataType?: ChartDataType;
}
