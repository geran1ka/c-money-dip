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
        label: (context) => {
          console.log("context", context);
          return context.formattedValue + " ₽";
        },
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
  const balance = Object.entries(balanceYear?.monthlyBalances).map(
    ([key, value]) => ({
      [key]: value,
    }),
  );

  data.labels = [];

  data.datasets[0].data = balance
    .slice(balance.length - 6 < 0 ? 0 : balance.length - 6)
    .map((item, index, arr) => {
      const lengt = arr.length;
      const key = Object.keys(item);

      if (lengt - index <= 6) {
        return { x: getPointsLine(key), y: round(item[key].balance) };
      }
    });

  return <Line options={options} data={data} redraw />;
};
