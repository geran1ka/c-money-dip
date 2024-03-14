import s from "./Statistic.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import classNames from "classnames";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Доходы", "Расходы"],
  datasets: [
    {
      label: "",
      data: [
        { key: "Income", value: 60 },
        { key: "Expense", value: 40 },
      ],
      backgroundColor: ["rgba(75, 0, 202, 0.2)", "rgba(184, 101, 214, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
      cutout: "80%",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const Statistic = ({ transactions, balance }) => {
  console.log(transactions);
  return (
    <div className={s.statistic}>
      <h2>Статистика</h2>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <button className={s.buttonS} type="button">
            Неделя
          </button>
          <button className={s.buttonS} type="button">
            Месяц
          </button>
          <button className={s.buttonS} type="button">
            Год
          </button>
        </div>
        <div className={s.centerBlock}>
          <Doughnut options={options} data={data} />
        </div>
        <div className={s.rightBlock}>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.trasparent)}></span>
            <span className={s.subtitle}>Баланс</span>
            <span className={s.amount}>530080 Р</span>
          </div>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.violet)}></span>
            <span className={s.subtitle}>Доходы</span>
            <span className={s.amount}>530080 Р</span>
          </div>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.pink)}></span>
            <span className={s.subtitle}>Расходы</span>
            <span className={s.amount}>530080 Р</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// income 4B00CA
// expenses B865D6
