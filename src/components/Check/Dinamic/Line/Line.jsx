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
import { randomId } from "../../../../helper/randomId";

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
      // callbacks: {
      //   title: () => null,
      //   label: (context) => context.formattedValue + " ₽",
      // },
    },
  },
};

const data = {
  labels: [],
  datasets: [
    {
      borderColor: "#B865D6",
    },
  ],
};

// export const LineChart = ({ transactions, year }) => {
//   data.labels = [];

//   const lastTransfers = [];

//   for (let i = 0; i < 12; i++) {
//     const lastTransferInMonth = transactions?
//       .filter((tr) => new Date(tr.date).getFullYear() === year)
//       .filter((tr) => new Date(tr.date).getMonth() === i);
//       console.log("lastTransferInMonth: ", lastTransferInMonth);

//     if (lastTransferInMonth !== undefined) {
//       console.log("lastTransferInMonth: ", lastTransferInMonth);
//       lastTransfers.push(lastTransferInMonth);
//     }
//   }

//   data.datasets[0].data = lastTransfers.map((tr) => {
//     return tr.map(item => {
//       const date = item.date;
//       const month = new Date(date).toLocaleString("default", { month: "short" });
//       return { x: date, y: round(item.amount) };
//     })

//   });

//   return <Line options={options} data={data} redraw />;
// };

export const LineChart = ({ transactions, year }) => {
  console.log("transactions: ", transactions);
  data.labels = [];

  const lastTransfers = [];

  for (let i = 0; i < 12; i++) {
    const lastTransferInMonth = transactions
      .filter((tr) => new Date(tr.date).getFullYear() === year)
      .filter((tr) => new Date(tr.date).getMonth() === i)
      .at(-1);

    if (lastTransferInMonth !== undefined) {
      console.log("lastTransferInMonth: ", lastTransferInMonth);
      lastTransfers.push(lastTransferInMonth);
    }
  }

  data.datasets[0].data = lastTransfers.map((tr) => {
    const date = tr.date;
    const month = new Date(date).toLocaleString("default", { month: "short" });
    console.log("month: ", month);
    console.log("tr.amount", tr.amount);

    return { x: month, y: round(tr.amount) };
  });

  console.log("data: ", data);

  return <Line options={options} data={data} redraw />;
};
