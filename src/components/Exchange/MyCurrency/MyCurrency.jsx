import { useDispatch, useSelector } from "react-redux";
import { myCurrencies } from "../../../data/myCurrencies";
import s from "./MyCurrency.module.scss";
import { useEffect } from "react";
import { fetchMyCurrency } from "../../../store/myCurrency/myCurrency.slice";
import { getArrayIsObject } from "../../../helper/getArrayIsObject";
import { Preloader } from "../../Preloader/Preloader";
import { Error, ErrorMini } from "../../UI/Error/Error";

export const MyCurrency = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const { myCurrency, loadingMy, errorMyCurrency } = useSelector(
    (state) => state.myCurrency,
  );
  console.log("errorMy: ", errorMyCurrency);

  const myCurrencyArr = getArrayIsObject(myCurrency, "values");

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchMyCurrency());
    }
  }, [dispatch, accessToken]);

  if (loadingMy) return <Preloader />;
  if (errorMyCurrency) {
    return <ErrorMini className={s.error} error={errorMyCurrency} />;
  }

  return (
    <div>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.title} colSpan="2">
              Мои валюты
            </th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {myCurrencyArr?.length ? (
            myCurrencyArr
              .filter((item) => Math.round(item.amount) !== 0)
              .map((item) => (
                <tr key={item.code}>
                  <td className={s.code}>{item.code}</td>
                  <td className={s.amount}>{item.amount.toLocaleString()}</td>
                </tr>
              ))
          ) : (
            <tr>
              <td className={s.code} colSpan={2}>
                Что-то пошло не так...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
