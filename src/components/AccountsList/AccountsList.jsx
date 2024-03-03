import classNames from "classnames";
import s from "./AccountsList.module.scss";
import { AccountsItem } from "./AccountsItem/Accountstem";
import { Container } from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchAccounts,
  fetchCreateAccount,
} from "../../store/accounts/accounts.slice";
// import { accounts } from "../../data/accounts";

export const AccountsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const { accounts, loading, error } = useSelector((state) => state.accounts);
  console.log("error: ", error);
  console.log("loading: ", loading);
  console.log("accounts: ", accounts);

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    } else {
      dispatch(fetchAccounts(accessToken));
    }
  }, [dispatch, accessToken, navigate]);

  const handlerOpenNewAccount = () => {
    dispatch(fetchCreateAccount(accessToken));
  };

  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Здравствуйте, Александр!</h2>
        <button
          className={classNames(s.button, "button")}
          onClick={handlerOpenNewAccount}>
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
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <li className={s.card} key={account.account}>
                  <AccountsItem props={account} />
                </li>
              ))
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
