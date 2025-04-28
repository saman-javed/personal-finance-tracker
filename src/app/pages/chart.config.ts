import { ChartConfiguration, ChartType } from 'chart.js';

export const getPieChartConfig = (labels: string[], data: number[]): ChartConfiguration => {
  return {
    type: 'pie' as ChartType,
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#8AC24A', '#607D8B', '#E91E63', '#2196F3'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  };
};