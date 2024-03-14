import classNames from "classnames";
import s from "./Check.module.scss";
import { Container } from "../Container/Container";
import { Transaction } from "./Transaction/Transaction";
import { History } from "./History/History";
import { Dinamic } from "./Dinamic/Dinamic";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../store/account/account.slice";
import { Statistic } from "./Statistic/Statistic";
import { Preloader } from "../Preloader/Preloader";
import { Error } from "../UI/Error/Error";

export const Check = () => {
  const dispatch = useDispatch();
  const accountId = useParams().id;
  const accessToken = useSelector((state) => state.auth.accessToken);
  const {
    account: { account, transactions },
    loading,
    error,
  } = useSelector((state) => state.account);

  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    dispatch(fetchAccount(accountId));
  }, [dispatch, accountId]);

  // if (error) return <Error error={error} />;

  return (
    <Container>
      <div className={s.container}>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <div className={s.containerHeader}>
              <h2 className={s.title}>Счет&nbsp;№{account}</h2>
              <Link className={classNames(s.button, "button")} to="/">
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
            {transactions?.length > 0 && (
              <Dinamic transactions={transactions} />
            )}
            <History transactions={transactions} account={account} />
            <Transaction />
            {/* <Statistic transactions={transactions} balance={balance} /> */}
          </>
        )}
      </div>
    </Container>
  );
};
