import s from "./Statistic.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import classNames from "classnames";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { getStatisticInfoObj } from "../../../helper/getStatisticInfoObj";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Доходы", "Расходы"],
};

const options = {
  rotation: 90,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const Statistic = ({ balancesByYearObj, balance }) => {
  const [timePeriod, setTimePeriod] = useState("year");
  console.log("timePeriod: ", timePeriod);
  const statisticInfo = getStatisticInfoObj(balancesByYearObj, timePeriod);

  console.log("statisticInfo: ", statisticInfo);
  data.datasets = [
    {
      label: "",
      data: [
        { key: "Income", value: statisticInfo.income },
        { key: "Expense", value: statisticInfo.expense },
      ],
      backgroundColor: ["rgba(75, 0, 202, 0.2)", "rgba(184, 101, 214, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
      cutout: "80%",
    },
  ];

  const handlerClick = (e) => {
    setTimePeriod(e.target.value);
  };

  return (
    <div className={s.statistic}>
      <h2 className={s.title}>Статистика</h2>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <button
            className={classNames(s.buttonS, timePeriod === "week" && s.active)}
            onClick={handlerClick}
            type="button"
            value="week">
            <span>Неделя</span>
          </button>
          <button
            className={classNames(
              s.buttonS,
              timePeriod === "month" && s.active,
            )}
            onClick={handlerClick}
            type="button"
            value="month">
            <span>Месяц</span>
          </button>
          <button
            className={classNames(s.buttonS, timePeriod === "year" && s.active)}
            onClick={handlerClick}
            type="button"
            value="year">
            <span>Год</span>
          </button>
        </div>
        <div className={s.centerBlock}>
          <Doughnut options={options} data={data} />
        </div>
        <div className={s.rightBlock}>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.trasparent)}></span>
            <span className={s.subtitle}>Баланс</span>
            <span className={s.amount}>
              {Math.ceil(balance).toLocaleString()}&nbsp;₽
            </span>
          </div>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.violet)}></span>
            <span className={s.subtitle}>Доходы</span>
            <span className={s.amount}>
              {Math.ceil(statisticInfo.income).toLocaleString()}&nbsp;₽
            </span>
          </div>
          <div className={s.rigthWrap}>
            <span className={classNames(s.circle, s.pink)}></span>
            <span className={s.subtitle}>Расходы</span>
            <span className={s.amount}>
              {Math.ceil(statisticInfo.expense).toLocaleString()}&nbsp;₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// income 4B00CA
// expenses B865D6
