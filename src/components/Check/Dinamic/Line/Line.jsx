import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { round } from "../../../../helper/round";
import { getPointsLine } from "../../../../helper/getPointsLine";
import { getArrayIsObject } from "../../../../helper/getArrayIsObject";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      xAlign: "center",
      yAlign: "bottom",
      displayColors: false,
      backgroundColor: "#210B36",
      bodyFont: {
        family: "Nunito",
        weight: "700",
        size: 15,
      },
      callbacks: {
        title: () => null,
        label: (context) => context.formattedValue + " ₽",
      },
    },
  },
};

const data = {
  labels: [],
  datasets: [
    {
      label: "",
      borderColor: "#B865D6",
    },
  ],
};

export const LineChart = ({ balanceYear }) => {
  console.log("balanceYear: ", balanceYear);
  const balance = getArrayIsObject(balanceYear?.month);
  console.log("balance: ", balance);
  data.labels = [];

  data.datasets[0].data = balance.map((item) => {
    const key = Object.keys(item);
    return { x: getPointsLine(key), y: round(item[key].balance) };
  });

  return <Line options={options} data={data} redraw />;
};
