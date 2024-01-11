"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Girls",
      data: [200, 350, 400, 350, 200, 400, 250], // Static data for Dataset 1
      borderColor: "rgb(255, 214, 10)",
      backgroundColor: "rgb(255, 195, 0)",
    },
    {
      label: "Boys",
      data: [100, 300, 250, 150, 400, 500, 350], // Static data for Dataset 2
      borderColor: "rgb(0, 53, 102)",
      backgroundColor: "rgb(0, 29, 61)",
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
