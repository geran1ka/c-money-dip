import classNames from "classnames";
import s from "./Transaction.module.scss";

export const Transaction = () => (
  // console.log("year: ", year);
  // console.log("transaction: ", transaction);

  <div className={s.transaction}>
    <h3 className={classNames(s.title)}>Перевод</h3>
    <form className={s.form}>
      <div className={s.wrap}>
        <label className={s.label}>Счет</label>
        <input className={s.input} name="to" />
      </div>
      <div className={s.wrap}>
        <label className={s.label}>Сумма</label>
        <input className={s.input} name="amount" />
      </div>
      <button className={classNames(s.button, "button")}>Перевести</button>
    </form>
  </div>
);
