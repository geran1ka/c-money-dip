import { rates } from "../../../data/rates";
import s from "./Course.module.scss";

export const Course = () => {
  console.log();

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Изменение курса в режиме реального времени</h3>
      <div className={s.tbody}>
        {rates.length &&
          rates.map((rate, index) => (
            <div className={s.row} key={index}>
              <span className={s.cellFirst}>{rate.rate}</span>
              <span className={s.cellSecond}></span>
              <span className={s.cellThird}>
                {rate.currency}
                {rate.exchangeRates === "up" && (
                  <svg
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z"
                      fill="#0EFF0A"></path>
                  </svg>
                )}
                {rate.exchangeRates === "down" && (
                  <svg
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 6.5L0.602886 0.5H8.39711L4.5 6.5Z"
                      fill="#F10000"></path>
                  </svg>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
