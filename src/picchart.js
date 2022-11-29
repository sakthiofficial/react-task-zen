
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Social ", "Direct", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 55, 30],
      backgroundColor: ["#1cc88a", "#36b9cc", "#4e73df"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)"
      ],
      borderWidth: 0
    }
  ]
};

export function Pichart() {
  return <Pie data={data} />;
}
