import _ from "lodash";

import { FC, useMemo } from "react";

import { LinearScale } from "chart.js";

import { PieChartProps } from "./types";
import PieChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { colors } from "../../../../foundations";

import { NumberUtility } from "../../../../core/util";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = PieChartStyledComponents;

const PieChart: FC<PieChartProps> = ({
  type,
  dataType = "number",
  step = 5,
  ...option
}) => {
  const chart = useMemo(() => {
    const commonOption: ChartJSProps["config"] = {
      type: "pie",
      data: {
        datasets: [],
      },
      options: {
        elements: {
          arc: {
            borderColor: "rgba(255,255,255,0)",
          },
        },
      },
    };

    switch (type) {
      case "polar": {
        commonOption.type = "polarArea";
        commonOption.options.scales = {
          r: {
            ticks: {
              color: colors.gray400,
              font: {
                size: 12,
              },
              maxRotation: 0,
              stepSize: ({ scale }: { scale: LinearScale }) => {
                const size = scale.max - scale.min;

                return Math.round((size * 1.1) / step);
              },
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
            border: {
              display: false,
            },
          },
        };
        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            isPieChart
            hasGrid={false}
          />
        );
      }
      case "donut": {
        commonOption.type = "doughnut";
        commonOption.options.cutout = "40%";
        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            isPieChart
            hasGrid={false}
          />
        );
      }
      case "basic":
      default: {
        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            isPieChart
            hasGrid={false}
          />
        );
      }
    }
  }, [option, step, type]);

  return <Container>{chart}</Container>;
};

PieChart.displayName = "PieChart";

export default PieChart;
