import { useMemo, useState } from "react";
import s from "./Dinamic.module.scss";
import { LineChart } from "./Line/Line";
import { randomId } from "../../../helper/randomId";
import { useSelector } from "react-redux";
import { getBalancesYear } from "../../../helper/getBalancesYeat";

export const Dinamic = ({ transactions }) => {
  const { account } = useSelector((state) => state.account.account);

  const selectYears = [
    ...new Set(transactions?.map((item) => new Date(item.date).getFullYear())),
  ];

  const [dinamicsByYear, setDinamicsByYear] = useState(selectYears[0]);
  const balancesByYearObj = getBalancesYear(transactions, account);

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
