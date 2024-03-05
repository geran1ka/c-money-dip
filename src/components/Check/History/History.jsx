import classNames from "classnames";
import s from "./History.module.scss";
// import { translations2 } from "../../../data/translations";

export const History = ({ transactions }) => (
  <div className={s.history}>
    <h3 className={s.title}>История переводов</h3>
    <div className={s.table__container}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Счет</th>
            <th className={s.th}>Сумма</th>
            <th className={s.th}>Дата</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {transactions?.length > 0 ? (
            transactions.map((transactions, index) => (
              <tr key={transactions.index}>
                <td className={classNames(s.td, s.undefined)}>
                  {transactions.from}
                </td>
                <td className={classNames(s.td, s.middle)}>
                  {transactions.amount.toLocaleString()}
                </td>
                <td className={classNames(s.td, s.date)}>
                  {new Date(transactions.date).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>У вас не было перводов по данному счету</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
