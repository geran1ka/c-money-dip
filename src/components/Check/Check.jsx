import classNames from "classnames";
import s from "./Check.module.scss";
import { Container } from "../Container/Container";
import { Transaction } from "./Transaction/Transaction";
import { History } from "./History/History";
import { Dinamic } from "./Dinamic/Dinamic";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../store/account/account.slice";

export const Check = () => {
  console.log("Check");
  const dispatch = useDispatch();

  const accountId = useParams().id;
  const {
    account: { account, balance, transactions },
    loading,
    error,
  } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchAccount(accountId));
  }, [dispatch, accountId]);

  return (
    <Container>
      <div className={s.Account_container__bOskA}>
        {loading ? (
          <div>Preloader</div>
        ) : (
          <>
            <div className={s.Account_container__header__MABYz}>
              <h2 className={s.Account_title__oytHW}>Счет №{account}</h2>
              <Link
                className={classNames(s.Account_button__3jGkT, "button")}
                to="/">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z"
                    fill="white"></path>
                </svg>
                Вернуться
              </Link>
            </div>
            <Dinamic transactions={transactions} />
            <History transactions={transactions} />
            <Transaction />
          </>
        )}
      </div>
    </Container>
  );
};
