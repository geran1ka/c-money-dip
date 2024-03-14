import { useDispatch, useSelector } from "react-redux";
import { myCurrencies } from "../../../data/myCurrencies";
import s from "./MyCurrency.module.scss";
import { useEffect } from "react";
import { fetchMyCurrency } from "../../../store/myCurrency/myCurrency.slice";
import { getArrayIsObject } from "../../../helper/getArrayIsObject";

export const MyCurrency = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const { myCurrency, loadingMy, errorMy } = useSelector(
    (state) => state.myCurrency,
  );

  const myCurrencyArr = getArrayIsObject(myCurrency, "values");

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchMyCurrency());
    }
  }, [dispatch, accessToken]);

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
          {myCurrencyArr.length &&
            myCurrencyArr.map((item) => (
              <tr key={item.code}>
                <td className={s.code}>{item.code}</td>
                <td className={s.amount}>{item.amount.toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
