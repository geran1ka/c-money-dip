import { Link } from "react-router-dom";
import s from "./CurrencyItem.module.scss";

export const CurrencyItem = ({ props }) => {
  const { account, balance, date, transactions } = props;

  return (
    <Link to={`/account/${account}`}>
      <p className={s.id}>{account}</p>
      <p className={s.balance}>{balance.toLocaleString()}</p>
      <div className={s.info}>
        <div>
          <p>открыт</p>
          <p>
            {date
              ? new Date(date).toLocaleDateString()
              : transactions[0].date
                ? new Date(transactions[0].date).toLocaleDateString()
                : "Нет данных"}
          </p>
        </div>
        <div>
          <p>последняя операция</p>
          {transactions.length > 0 ? (
            <time dateTime={new Date(transactions[0].date).toISOString()}>
              {new Date(transactions[0].date).toLocaleDateString()}
            </time>
          ) : (
            <span>Транзакций не было</span>
          )}
        </div>
      </div>
    </Link>
  );
};
