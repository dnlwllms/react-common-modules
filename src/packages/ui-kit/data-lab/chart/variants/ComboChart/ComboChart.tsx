import _ from "lodash";

import { FC, useMemo } from "react";

import { ComboChartProps } from "./types";
import ComboChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { NumberUtility } from "../../../../core/util";
import { verticalScrum } from "../../ChartJS/plugins";
import { LinearScale } from "chart.js";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = ComboChartStyledComponents;

const ComboChart: FC<ComboChartProps> = ({
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
          bar: {
            barPercentage: 0.6,
          },
        },
        tension: 0.4,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
              tickColor: "transparent",
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              tickColor: "transparent",
            },
            ticks: {
              stepSize: ({ scale }: { scale: LinearScale }) => {
                const size = scale.max - scale.min;

                return Math.round(size / (step - 1));
              },
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
          },
        },
        interaction: {},
        animation: {
          delay: (context: any) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default") {
              delay = context.dataIndex * 60 + context.datasetIndex * 180;
            }
            return delay;
          },
        },
      },
    };

    commonOption.data.datasets = option.data.datasets.map((dataset) => {
      if (dataset.type === "line") {
        dataset.order = 1;
        dataset.pointStyle = false;
      } else {
        dataset.order = 2;
      }

      return dataset;
    });

    switch (type) {
      case "line-scatter": {
        commonOption.type = "scatter";
        commonOption.options.scales.x.type = "time";
        commonOption.options.scales.x.time = {
          displayFormats: {
            year: "yyyy",
          },
        };
        commonOption.options.interaction.mode = "x";
        commonOption.options.interaction.intersect = false;
        commonOption.plugins = [verticalScrum];

        return <ChartJS config={_.merge(commonOption, option)} />;
      }
      case "basic":
      default: {
        commonOption.options.scales.x.stacked = true;
        commonOption.options.scales.y.stacked = true;
        commonOption.options.interaction.mode = "index";

        return <ChartJS config={_.merge(commonOption, option)} />;
      }
    }
  }, [option, step, type]);

  return <Container>{chart}</Container>;
};

ComboChart.displayName = "ComboChart";

export default ComboChart;
