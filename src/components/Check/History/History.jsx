import classNames from "classnames";
import s from "./History.module.scss";
import { translations } from "../../../data/translations";

export const History = () => {
  console.log("history");

  return (
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
            {translations.length > 0 ? (
              translations.map((translation) => (
                <tr key={translation.check}>
                  <td className={classNames(s.td, s.undefined)}>
                    {translation.check}
                  </td>
                  <td className={classNames(s.td, s.middle)}>
                    {translation.sum.toLocaleString()}
                  </td>
                  <td className={classNames(s.td, s.date)}>
                    {new Date(translation.date).toLocaleDateString()}
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
};
