import { Statistic } from "../Statistic/Statistic";
import s from "./History.module.scss";
import { Row } from "./Row/Row";

export const History = ({ transactions, account }) => {
  console.log("account: ", account);

  return (
    <div className={s.history}>
      <h3 className={s.title}>История переводов</h3>
      <div className={s.container}>
        {transactions?.length > 0 ? (
          <>
            <table className={s.table}>
              <thead className={s.thead}>
                <tr>
                  <th className={s.th}>Счет</th>
                  <th className={s.th}>Сумма</th>
                  <th className={s.th}>Дата</th>
                </tr>
              </thead>
              <tbody className={s.tbody}>
                {transactions.map((transaction, index) => (
                  <Row
                    key={index}
                    transaction={transaction}
                    account={account}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p> Операции по счету № {account} --- не производились...</p>
        )}
      </div>
    </div>
  );
};
