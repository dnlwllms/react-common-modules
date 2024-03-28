import _ from "lodash";

import { FC, useMemo } from "react";

import { LineChartProps } from "./types";
import LineChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { NumberUtility } from "../../../../core/util";

import { colors } from "../../../../foundations";
import { verticalScrum } from "../../ChartJS/plugins";
import { LinearScale } from "chart.js";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = LineChartStyledComponents;

const LineChart: FC<LineChartProps> = ({
  type,
  step = 5,
  dataType = "number",
  ...option
}) => {
  const chart = useMemo(() => {
    const commonOption: ChartJSProps["config"] = {
      type: "line",
      data: {
        datasets: [],
      },
      options: {
        tension: 0.4,
        scales: {
          x: {
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

        interaction: {
          mode: "index",
          intersect: false,
        },

        animation: {
          delay: (context: any) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default") {
              delay = context.dataIndex * 60 + context.datasetIndex;
            }
            return delay;
          },
        },
      },

      plugins: [verticalScrum],
    };

    if (type === "point") {
      commonOption.data.datasets = option.data.datasets.map((dataset) => {
        dataset.pointRadius = 4;
        dataset.pointBackgroundColor = colors.white;
        dataset.pointBorderWidth = 2;

        return dataset;
      });
    } else {
      commonOption.data.datasets = option.data.datasets.map((dataset) => {
        dataset.pointStyle = false;

        return dataset;
      });
    }

    switch (type) {
      case "segment": {
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
      case "point": {
        commonOption.options.tension = 0;
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
      case "dashed": {
        commonOption.data.datasets = option.data.datasets.map((dataset) => {
          dataset.borderDash = [4];

          return dataset;
        });
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
      case "area": {
        commonOption.data.datasets = option.data.datasets.map((dataset) => {
          dataset.fill = "start";

          return dataset;
        });

        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            colorPalette="gradient"
          />
        );
      }
      case "multi":
      case "basic":
      default: {
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
    }
  }, [option, step, type]);

  return <Container>{chart}</Container>;
};

LineChart.displayName = "LineChart";

export default LineChart;
