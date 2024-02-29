import classNames from "classnames";
import s from "./ChangeCurrency.module.scss";

export const ChangeCurrency = () => {
  console.log();

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Обмен валюты</h3>
      <form className={s.form}>
        <legend className={s.legend}>
          <div className={s.inputWrapper}>
            <label className={s.label}>Откуда</label>
            <select className={s.input} name="from">
              <option>AUD</option>
              <option>BTC</option>
              <option>BYR</option>
              <option>CAD</option>
            </select>
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label}>Куда</label>
            <select className={s.input} name="to">
              <option>AUD</option>
              <option>BTC</option>
              <option>BYR</option>
              <option>CAD</option>
            </select>
          </div>
          <div className={s.inputWrapper}>
            <span className={s.error}></span>
            <label className={s.label}>Сумма</label>
            <input className={s.input} name="amount" />
          </div>
        </legend>
        <button className={classNames(s.button, "button")}>Обменять</button>
      </form>
    </div>
  );
};
