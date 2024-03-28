import _ from "lodash";

import { FC, useMemo } from "react";

import { ScatterChartProps } from "./types";
import ScatterChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { NumberUtility } from "../../../../core/util";

import { verticalScrum } from "../../ChartJS/plugins";
import { LinearScale } from "chart.js";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = ScatterChartStyledComponents;

const ScatterChart: FC<ScatterChartProps> = ({
  type,
  step = 5,
  dataType = "number",
  ...option
}) => {
  const chart = useMemo(() => {
    const commonOption: ChartJSProps["config"] = {
      type: "scatter",
      data: {
        datasets: [],
      },
      options: {
        elements: {
          line: {
            borderWidth: 0,
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              displayFormats: {
                year: "yyyy",
              },
            },
            grid: {
              drawOnChartArea: false,
              tickLength: 8,
              tickColor: "transparent",
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              tickLength: 4,
              tickColor: "transparent",
            },
            ticks: {
              stepSize: ({ scale }: { scale: LinearScale }) => {
                const size = scale.max - scale.min;

                return Math.round(size / (step - 2));
              },
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
          },
        },
        interaction: {},
      },
    };

    switch (type) {
      case "bubble":
        commonOption.type = "bubble";
        return <ChartJS config={_.merge(commonOption, option)} />;
      case "basic":
      default: {
        commonOption.options.interaction.mode = "x";
        commonOption.options.interaction.intersect = false;
        commonOption.plugins = [verticalScrum];
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
    }
  }, [option, step, type]);
  return <Container>{chart}</Container>;
};

ScatterChart.displayName = "ScatterChart";

export default ScatterChart;
