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
  sortAccounts,
} from "../../store/accounts/accounts.slice";
import { Error, ErrorMini } from "../UI/Error/Error";
import { Preloader } from "../Preloader/Preloader";

export const AccountsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const { accounts, loading, error, errorCreateAccount } = useSelector(
    (state) => state.accounts,
  );
  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    } else {
      dispatch(fetchAccounts());
    }
  }, [dispatch, accessToken, navigate]);

  const handlerOpenNewAccount = () => {
    dispatch(fetchCreateAccount());
  };

  const handlerSortAccounts = (e) => {
    dispatch(sortAccounts(e.target.value));
  };

  // !ToDo добаить Error
  if (error) return <Error className={s.error} error={error} />;

  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title} data-test="account-user">
          Здравствуйте, Developer!
        </h2>
        <div className={s.wrapperButton}>
          <button
            className={classNames(s.button, "button")}
            onClick={handlerOpenNewAccount}>
            Открыть новый счет
          </button>
          {errorCreateAccount && (
            <ErrorMini className={s.errorMini} error={errorCreateAccount} />
          )}
        </div>

        {loading ? (
          <Preloader />
        ) : (
          <div className={s.currencies}>
            <h3 className={s.currenciesTitle}>Мои счета</h3>
            <div className={s.sort}>
              <span className={s.sortTitle}>Сортировка:</span>
              <select
                className={s.select}
                onChange={handlerSortAccounts}
                name="sort">
                <option
                  style={{ textAlign: "center" }}
                  id="default"
                  value="default">
                  -----
                </option>
                <option id="account" value="account">
                  Номер счёта
                </option>
                <option id="balance" value="balance">
                  Баланс
                </option>
                <option id="date" value="date">
                  Дата открытия
                </option>
                <option id="last" value="last">
                  Дата трансзакции
                </option>
              </select>
            </div>
            <ul className={s.list} data-test="accounts">
              {accounts.length > 0 ? (
                accounts.map((account) => (
                  <li
                    className={s.card}
                    key={account.account}
                    data-test="account">
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
        )}
      </div>
    </Container>
  );
};
