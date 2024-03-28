import _ from "lodash";

import { FC, useMemo } from "react";

import { RadarChartProps } from "./types";
import RadarChartStyledComponents from "./styled";

import ChartJS, { ChartJSProps } from "../../ChartJS";

import { colors } from "../../../../foundations";

import { NumberUtility } from "../../../../core/util";
import { LinearScale } from "chart.js";

const { getKoreanUnitNumber } = NumberUtility;

const { Container } = RadarChartStyledComponents;

const RadarChart: FC<RadarChartProps> = ({
  type,
  dataType = "number",
  step = 5,
  ...option
}) => {
  const chart = useMemo(() => {
    const commonOption: ChartJSProps["config"] = {
      type: "radar",
      data: {
        datasets: [],
      },
      options: {
        scales: {
          r: {
            ticks: {
              color: colors.gray400,
              font: {
                size: 12,
              },
              stepSize: ({ scale }: { scale: LinearScale }) => {
                const size = scale.max - scale.min;

                return Math.round(size / step);
              },
              callback: (value: number) => {
                return getKoreanUnitNumber(value);
              },
            },
            border: {
              display: false,
            },
            angleLines: {
              display: false,
            },
            pointLabels: {
              padding: 0,
              font: {
                size: 12,
              },
              color: colors.gray400,
            },
          },
        },
      },
    };

    switch (type) {
      case "grouped":
      case "basic":
      default: {
        commonOption.data.datasets = option.data.datasets.map((dataset) => {
          return dataset;
        });

        return (
          <ChartJS
            config={_.merge(commonOption, option)}
            colorPalette="translucency"
            hasGrid={false}
          />
        );
      }
    }
  }, [option, step, type]);

  return <Container>{chart}</Container>;
};

RadarChart.displayName = "RadarChart";

export default RadarChart;
