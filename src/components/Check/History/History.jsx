import classNames from "classnames";
import s from "./History.module.scss";
import { translations } from "../../../data/translations";

export const History = () => {
  console.log("history");

  return (
    <div className={s.Account_history__qgCwN}>
      <h3 className={s.Account_history__title__X1e2S}>История переводов</h3>
      <div className={s.Table_table__container__ExoA}>
        <table className={s.Table_table__lsukp}>
          <thead className={s.Table_thead__tkFEQ}>
            <tr>
              <th className={s.Table_th__yQviT}>Счет</th>
              <th className={s.Table_th__yQviT}>Сумма</th>
              <th className={s.Table_th__yQviT}>Дата</th>
            </tr>
          </thead>
          <tbody className={s.Table_tbody__S3Fd}>
            {translations.length > 0 ? (
              translations.map((translation) => (
                <tr key={translation.check}>
                  <td className={classNames(s.Table_td__HXWLH, s.undefined)}>
                    {translation.check}
                  </td>
                  <td
                    className={classNames(
                      s.Table_td__HXWLH,
                      s.Table_td_middle__bXwqs,
                    )}>
                    {translation.sum.toLocaleString()}
                  </td>
                  <td
                    className={classNames(
                      s.Table_td__HXWLH,
                      s.Table_td__date__0bfUN,
                    )}>
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
