import _ from "lodash";

import { FC, useEffect, useMemo, useRef, useState } from "react";

import Chart, { ChartConfiguration } from "chart.js/auto";

import { ChartJSProps } from "./types";
import ChartJSStyledComponents from "./styled";

import ChartJSContext from "./context";

import Legend, { LegendItem } from "../atoms/Legend";

import { CSSUtility } from "../../../core/util";

import { colors } from "../../../foundations";

const { hexToRgb, getGradient } = CSSUtility;

const { StyledCanvas } = ChartJSStyledComponents;

const ChartJS: FC<ChartJSProps> = ({
  config,
  hasLegend = true,
  hasCommonOption = true,
  colorPalette = "default",
  isPieChart,
  hasGrid = true,
}) => {
  const [chartContext, setChartContext] = useState<Chart>();

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      let chartConfig: ChartJSProps["config"] = _.cloneDeep(config);

      if (hasCommonOption) {
        Chart.defaults.font.family = "Pretendard";

        const commonOption: ChartJSProps["config"] = {
          data: {
            labels: [],
            datasets: [],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 5 / 2,
            scales: {
              x: {
                offset: true,
                ticks: {
                  color: colors.gray400,
                  font: {
                    size: 12,
                  },
                  maxRotation: 0,
                },
                border: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  color: colors.gray400,
                  font: {
                    size: 12,
                  },
                },
                border: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            elements: {
              arc: {},
            },
          },
        };

        if (!hasGrid) {
          commonOption.options.scales = {};
        }

        switch (colorPalette) {
          case "default": {
            if (isPieChart) {
              commonOption.options.elements.arc.backgroundColor = (
                ctx: any
              ) => {
                return colors[
                  `data0${ctx.dataIndex + 1}` as keyof typeof colors
                ];
              };
            } else {
              commonOption.data.datasets = config.data.datasets.map(
                (dataset, index) => {
                  dataset.borderColor =
                    colors[`data0${(index % 10) + 1}` as keyof typeof colors];
                  dataset.backgroundColor =
                    colors[`data0${(index % 10) + 1}` as keyof typeof colors];
                  return dataset;
                }
              );
            }
            break;
          }
          case "translucency": {
            if (isPieChart) {
              commonOption.options.elements.arc.backgroundColor = (
                ctx: any
              ) => {
                const hex =
                  colors[`data0${ctx.dataIndex + 1}` as keyof typeof colors];

                const rgb = hexToRgb(hex);

                if (rgb) {
                  const { r, g, b } = rgb;
                  return `rgba(${r}, ${g}, ${b}, 0.7)`;
                } else {
                  return hex;
                }
              };
            } else {
              commonOption.data.datasets = config.data.datasets.map(
                (dataset, index) => {
                  const hex =
                    colors[`data0${index + 1}` as keyof typeof colors];

                  const rgb = hexToRgb(hex);

                  if (rgb) {
                    const { r, g, b } = rgb;
                    dataset.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
                  } else {
                    dataset.backgroundColor = hex;
                  }

                  dataset.borderColor =
                    colors[`data0${(index % 10) + 1}` as keyof typeof colors];

                  return dataset;
                }
              );
            }
            break;
          }
          case "gradient": {
            commonOption.data.datasets = config.data.datasets.map(
              (dataset, index) => {
                const color =
                  colors[`data0${(index % 10) + 1}` as keyof typeof colors];
                dataset.borderColor = color;

                dataset.backgroundColor = (context: any) => {
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;

                  if (chartArea) {
                    return getGradient(ctx, chartArea, color);
                  }
                };

                return dataset;
              }
            );
            break;
          }
          case "xPlusMinus": {
            commonOption.data.datasets = config.data.datasets.map((dataset) => {
              dataset.backgroundColor = (ctx: any) => {
                return ctx.parsed.x > 0 ? colors.plus500 : colors.minus500;
              };

              return dataset;
            });
            break;
          }
          case "yPlusMinus": {
            commonOption.data.datasets = config.data.datasets.map((dataset) => {
              dataset.backgroundColor = (ctx: any) => {
                return ctx.parsed.y > 0 ? colors.plus500 : colors.minus500;
              };

              return dataset;
            });
            break;
          }
        }

        chartConfig = _.merge(commonOption, config) as ChartConfiguration;
      }

      const chart = new Chart(ref.current, chartConfig);

      setChartContext(chart);

      return () => {
        chart.destroy();
      };
    }
  }, [colorPalette, config, hasCommonOption, hasGrid, isPieChart]);

  const initialLegendItems = useMemo(() => {
    if (isPieChart) {
      return (
        config.data.labels?.map((label) => {
          return {
            label: label as string,
            isHide: false,
          };
        }) || []
      );
    } else {
      return config.data.datasets.map(({ label }) => ({
        label: label as string,
        isHide: false,
      }));
    }
  }, [config.data.datasets, config.data.labels, isPieChart]);

  const [legendItems, setLegendItems] = useState(initialLegendItems);

  const handleLegendItemClick = (legendItem: LegendItem, index: number) => {
    if (chartContext) {
      const copy = _.cloneDeep(legendItems);
      if (isPieChart) {
        if (copy[index].isHide) {
          chartContext.show(0, index);
        } else {
          chartContext.hide(0, index);
        }
      } else {
        if (copy[index].isHide) {
          chartContext.show(index);
        } else {
          chartContext.hide(index);
        }
      }
      copy[index].isHide = !copy[index].isHide;

      setLegendItems(copy);
    }
  };

  return (
    <ChartJSContext.Provider value={chartContext}>
      {hasLegend && (
        <Legend
          colorPalette={colorPalette}
          items={legendItems}
          onItemClick={handleLegendItemClick}
        />
      )}
      <StyledCanvas ref={ref} />
    </ChartJSContext.Provider>
  );
};

export default ChartJS;
