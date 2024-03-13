import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Доходы", "Расходы"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 33],
      backgroundColor: ["rgba(75, 0, 202, 0.2)", "rgba(184, 101, 214, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
  ],
};

export const Statistic = () => <Doughnut data={data} />;

// income 4B00CA
// expenses B865D6
