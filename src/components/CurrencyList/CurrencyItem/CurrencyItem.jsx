import s from "./CurrencyItem.module.scss";

export const CurrencyItem = ({ props }) => {
  const { id, balance, openCurrensy, lastOperation } = props;

  return (
    <a href="/account">
      <p className={s.id}>{id}</p>
      <p className={s.balance}>{balance.toLocaleString()}</p>
      <div className={s.info}>
        <div>
          <p>открыт</p>
          <p>{new Date(openCurrensy).toLocaleDateString()}</p>
        </div>
        <div>
          <p>последняя операция</p>
          {lastOperation ? (
            <time dateTime={new Date(lastOperation).toISOString()}>
              {new Date(lastOperation).toLocaleDateString()}
            </time>
          ) : (
            <span>Транзакций не было</span>
          )}
        </div>
      </div>
    </a>
  );
};
