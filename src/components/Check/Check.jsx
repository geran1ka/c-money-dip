import classNames from "classnames";
import s from "./Check.module.scss";
import { Container } from "../Container/Container";
import { Transaction } from "./Transaction/Transaction";
import { History } from "./History/History";
import { Dinamic } from "./Dinamic/Dinamic";
import { Link } from "react-router-dom";

export const Check = () => {
  console.log("Check");

  return (
    <Container>
      <div className={s.Account_container__bOskA}>
        <div className={s.Account_container__header__MABYz}>
          <h2 className={s.Account_title__oytHW}>
            Счет №24051911200915061003240821
          </h2>
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
        <Dinamic />
        <History />
        <Transaction />
      </div>
    </Container>
  );
};
