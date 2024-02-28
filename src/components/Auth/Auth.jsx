import classNames from "classnames";
import { Container } from "../Container/Container";
import s from "./Auth.module.scss";

export const Auth = () => {
  console.log("Auth");

  return (
    <Container>
      <div className={s.container}>
        <div className={s.wrapper}>
          <form className={s.form}>
            <legend className={s.title}>Вход в аккаунт</legend>
            <div className={s.inputWrapper}>
              <span className={s.error}></span>
              <label className={s.label}>Логин</label>
              <input className={s.input} name="login" />
            </div>
            <div className={s.inputWrapper}>
              <span className={s.error}></span>
              <label className={s.label}>Пароль</label>
              <input type="password" className={s.input} name="password" />
            </div>
            <button className={classNames(s.button, "button")} type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
