import _ from "lodash";

import { FC, useMemo } from "react";

import { BarChartProps } from "./types";
import BarChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { NumberUtility } from "../../../../core/util";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = BarChartStyledComponents;

const BarChart: FC<BarChartProps> = ({
  type,
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
          bar: {
            barPercentage: 0.7,
          },
        },
        indexAxis: "y",
        scales: {
          x: {
            border: {
              display: false,
            },
            ticks: {
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
          },
          y: {
            grid: {
              tickLength: 12,
              tickColor: "transparent",
              drawOnChartArea: false,
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
            colorPalette="xPlusMinus"
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
  }, [option, type]);

  return <Container>{chart}</Container>;
};

BarChart.displayName = "BarChart";

export default BarChart;
