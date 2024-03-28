import { Chart } from "chart.js";

export const verticalScrum = {
  id: "verticalScrum",
  afterDraw: (chart: Chart) => {
    const chartContext = chart.ctx;

    chart.data.datasets.forEach((dataset, index) => {
      const { data } = chart.getDatasetMeta(index);

      data.forEach((point) => {
        if (point.active) {
          chartContext.beginPath();
          chartContext.lineWidth = 2;
          chartContext.setLineDash([2, 2]);
          chartContext.save();
          chartContext.moveTo(point.x, 0);
          chartContext.lineTo(point.x, chart.chartArea.height);
          chartContext.stroke();
          chartContext.setLineDash([]);
        }
      });
    });
  },
};
