import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Business Management",
    "Robotics and Automation",
    "Cloud Computing and Virtualization",
    "Cybersecurity and Information Assurance",
    "Advanced Molecular Biology",
  ],
  datasets: [
    {
      label: "num of participants",
      data: [10, 15, 7, 5, 3],
      backgroundColor: ["#F9BE00", "#003566", "#E74C3C", "#000814", "#F39C12"],
      borderColor: [
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
