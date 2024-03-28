import _ from "lodash";

import { FC, useMemo } from "react";

import { ColumnChartProps } from "./types";
import ColumnChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { NumberUtility } from "../../../../core/util";
import { LinearScale } from "chart.js";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = ColumnChartStyledComponents;

const ColumnChart: FC<ColumnChartProps> = ({
  type,
  step = 5,
  dataType = "number",
  ...option
}) => {
  const chart = useMemo(() => {
    const commonOption: ChartJSProps["config"] = {
      type: "bar",
      data: {
        datasets: [],
      },
      options: {
        datasets: {
          hide: true,
          bar: {
            barPercentage: 0.6,
          },
        },
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

                return Math.round(
                  size / (step - (type === "diverging" ? 2 : 1))
                );
              },
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
          },
        },
        animation: {
          delay: (context: any) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default") {
              delay = context.dataIndex * 120 + context.datasetIndex;
            }
            return delay;
          },
        },
      },
    };

    switch (type) {
      case "stacked": {
        commonOption.options.scales.x.stacked = true;
        commonOption.options.scales.y.stacked = true;
        commonOption.options.interaction = {
          mode: "index",
        };

        const config = _.merge(commonOption, option);

        return <ChartJS config={config} />;
      }
      case "diverging": {
        commonOption.data.datasets = option.data.datasets.map((dataset) => {
          dataset.skipNull = true;

          return dataset;
        });

        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            colorPalette="yPlusMinus"
          />
        );
      }
      case "grouped": {
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
      case "basic":
      default: {
        return <ChartJS config={_.merge(commonOption, option)} />;
      }
    }
  }, [option, step, type]);

  return <Container>{chart}</Container>;
};

ColumnChart.displayName = "ColumnChart";

export default ColumnChart;
