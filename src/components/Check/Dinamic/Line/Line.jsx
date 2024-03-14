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
  const balance = Object.entries(balanceYear?.month).map(([key, value]) => ({
    [key]: value,
  }));

  data.labels = [];

  data.datasets[0].data = balance
    .slice(balance.length - 6 < 0 ? 0 : balance.length - 6)
    .map((item, index, arr) => {
      const length = arr.length;
      const key = Object.keys(item);
      if (length - index <= 6) {
        return { x: getPointsLine(key), y: round(item[key].balance) };
      }
    });

  return <Line options={options} data={data} redraw />;
};
