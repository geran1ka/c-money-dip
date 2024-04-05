import { useState } from "react";
import s from "./Dinamic.module.scss";
import { LineChart } from "./Line/Line";
import { randomId } from "../../../helper/randomId";
import { getBalancesYear } from "../../../helper/getBalancesYeat";

export const Dinamic = ({ account, transactions, balance }) => {
  // const { account, transactions } = useSelector((state) => state.account);

  const selectYears = [
    ...new Set(
      [...transactions]
        .reverse()
        .map((item) => new Date(item.date).getFullYear()),
    ),
  ];

  const [dinamicsByYear, setDinamicsByYear] = useState(selectYears[0]);
  const balancesByYearObj = getBalancesYear(transactions, account, balance);

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
