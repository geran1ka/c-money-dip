import { useState } from "react";
import s from "./Dinamic.module.scss";
import { LineChart } from "./Line/Line";
import { randomId } from "../../../helper/randomId";

export const Dinamic = ({ transactions }) => {
  const selectYears = [
    ...new Set(transactions?.map((item) => new Date(item.date).getFullYear())),
  ];

  const [dinamicsByYear, setDinamicsByYear] = useState(selectYears[0]);

  const handlerChangeYears = (e) => {
    setDinamicsByYear(+e.target.value);
  };

  // const filterArrYear = (arr, year) =>
  //   arr.filter((item) => new Date(item.date).getFullYear() === +year);

  console.log("Dinamic");
  return (
    <div className={s.dynamic}>
      <div className={s.header}>
        <h3 className={s.title}>Динамика</h3>
        <span className={s.year}>{dinamicsByYear}</span>
        <select
          className={s.select}
          value={dinamicsByYear}
          onChange={handlerChangeYears}>
          {selectYears.length > 0 ? (
            selectYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))
          ) : (
            <div>Preloader</div>
          )}
        </select>
      </div>
      <LineChart transactions={transactions} year={dinamicsByYear} />
    </div>
  );
};
