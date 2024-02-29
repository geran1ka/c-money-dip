import classNames from "classnames";
import s from "./CurrencyList.module.scss";
import { currencies } from "../../data/currencies";
import { CurrencyItem } from "./CurrencyItem/CurrencyItem";
import { Container } from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../const/localStorage";
import { useEffect } from "react";

export const CurrencyList = () => {
  console.log();
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const accessToken2 = getLocalStorage("accessToken");

  useEffect(() => {
    if (accessToken) return;

    if (accessToken) {
      console.log("accessTokenStorage", accessToken);
    } else {
      navigate("/auth");
    }
  }, [dispatch, accessToken]);

  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Здравствуйте, Александр!</h2>
        <button className={classNames(s.button, "button")}>
          Открыть новый счет
        </button>
        <div className={s.currencies}>
          <h3 className={s.currenciesTitle}>Мои счета</h3>
          <div className={s.sort}>
            <span className={s.sortTitle}>Сортировка:</span>
            <select className={s.select}>
              <option id="account">Номер счёта</option>
              <option id="balance">Баланс</option>
              <option id="date">Дата открытия</option>
              <option id="last">Дата последней трансзакции</option>
            </select>
          </div>
          <ul className={s.list}>
            {currencies.length > 0 ? (
              currencies.map((currency) => {
                console.log(currency);
                return (
                  <li className={s.card} key={currency.id}>
                    <CurrencyItem props={currency} />
                  </li>
                );
              })
            ) : (
              <div>
                <h2>У Вас нет открытх счетов</h2>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Container>
  );
};