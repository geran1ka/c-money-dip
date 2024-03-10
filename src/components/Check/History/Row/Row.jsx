import classNames from "classnames";
import s from "./Row.module.scss";

export const Row = ({ transaction, account }) => {
  const { date, from, to, amount } = transaction;

  const isIncome = to === account;

  return (
    <tr>
      <td className={classNames(s.td)}>{isIncome ? from : to}</td>
      <td className={classNames(s.td, s.middle, !isIncome && s.expenses)}>
        {isIncome ? "+" : "-"}
        {amount.toLocaleString()}
      </td>
      <td className={classNames(s.td, s.date)}>
        {new Date(date).toLocaleDateString()}
      </td>
    </tr>
  );
};
