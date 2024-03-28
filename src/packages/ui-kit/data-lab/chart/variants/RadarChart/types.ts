import { ChartJSProps } from "../../ChartJS";
import { ChartDataType } from "../../types";

export interface RadarChartProps extends Omit<ChartJSProps["config"], "type"> {
  type: "basic" | "grouped";
  step?: number;
  dataType?: ChartDataType;
}
