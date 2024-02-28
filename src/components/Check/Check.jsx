import classNames from "classnames";
import s from "./Check.module.scss";
import { Container } from "../Container/Container";
import { Transaction } from "./Transaction/Transaction";
import { History } from "./History/History";

export const Check = () => {
  console.log("Check");

  return (
    <Container>
      <div className={s.Account_container__bOskA}>
        <div className={s.Account_container__header__MABYz}>
          <h2 className={s.Account_title__oytHW}>
            Счет №24051911200915061003240821
          </h2>
          <a
            className={classNames(s.Account_button__3jGkT, "button")}
            href="/currencies">
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
          </a>
        </div>
        <div className={s.Account_dynamic__q70XE}>
          <div className={s.Account_dynamic__header__iCPTa}>
            <h3 className={s.Account_dynamic__title__JwsS2}>Динамика</h3>
            <span className={s.Account_dynamic__year__22YBJ}>2022</span>
            <select className={s.Account_dynamic__select__7zXlN}>
              <option hidden>Год</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
        <History />
        <Transaction />
      </div>
    </Container>
  );
};
