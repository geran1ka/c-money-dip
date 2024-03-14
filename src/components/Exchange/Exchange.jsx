import classNames from "classnames";
import { Container } from "../Container/Container";
import s from "./Exchange.module.scss";
import { Course } from "./Course/Course";
import { MyCurrency } from "./MyCurrency/MyCurrency";
import { ChangeCurrency } from "./ChangeCurrency/ChangeCurrency";
// import { useLocation } from "react-router-dom";

export const Exchange = () => {
  console.log();

  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Обмен валюты</h2>

        {/* <span className={s.text}>Счет</span>
        <span className={s.textWhite}>24051911200915061003240821</span>
        <br />
        <span className={s.text}>Баланс </span>
        <span className={classNames(s.textWhite, s.balance)}>6 795 296.36</span> */}

        <div className={s.wrapper}>
          <Course />
          <div className={s.rightWrapper}>
            <ChangeCurrency />
            <MyCurrency />
          </div>
        </div>
      </div>
    </Container>
  );
};
