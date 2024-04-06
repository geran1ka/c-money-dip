import { useState } from "react";
import s from "./Dinamic.module.scss";
import { LineChart } from "./Line/Line";
import { randomId } from "../../../helper/randomId";

export const Dinamic = ({ selectYears, balancesByYearObj }) => {
  const [dinamicsByYear, setDinamicsByYear] = useState(selectYears[0]);

  const handlerChangeYears = (e) => {
    setDinamicsByYear(+e.target.value);
  };

  return (
    <div className={s.dynamic}>
      <div className={s.header}>
        <h3 className={s.title}>Динамика</h3>
        <span className={s.year}>{dinamicsByYear}</span>
        <select
          className={s.select}
          value={dinamicsByYear}
          onChange={handlerChangeYears}>
          {selectYears.length > 0 &&
            selectYears.map((year) => (
              <option key={randomId()} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      <LineChart balanceYear={balancesByYearObj[dinamicsByYear]} />
    </div>
  );
};
