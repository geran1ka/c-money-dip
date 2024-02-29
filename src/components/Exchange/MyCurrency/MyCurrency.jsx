import { myCurrencies } from "../../../data/myCurrencies";
import s from "./MyCurrency.module.scss";

export const MyCurrency = () => {
  console.log();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className={s.title} colSpan="2">
              Мои валюты
            </th>
          </tr>
        </thead>
        <tbody>
          {myCurrencies.length &&
            myCurrencies.map((myCurency) => (
              <tr key={myCurency.code}>
                <td className={s.code}>{myCurency.code}</td>
                <td className={s.amount}>
                  {myCurency.amount.toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
