import classNames from "classnames";
import { Container } from "../Container/Container";
import s from "./Auth.module.scss";
import { useForm } from "react-hook-form";

export const Auth = () => {
  console.log();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Container>
      <div className={s.container}>
        <div className={s.wrapper}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <legend className={s.title}>Вход в аккаунт</legend>
            <div className={s.inputWrapper}>
              <span className={s.error}>{errors.name && errors.name}</span>
              <label className={s.label}>Логин</label>
              <input
                className={s.input}
                {...register("name", {
                  required: true,
                  pattern: {
                    value: /[A-Za-z]{6,}/,
                    message: "Некорректный логин",
                  },
                })}
              />
            </div>
            <div className={s.inputWrapper}>
              <span className={s.error}></span>
              <label className={s.label}>Пароль</label>
              <input
                type="password"
                className={s.input}
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /[a-zA-Z0-9]{6,}/,
                    message: "Некорректный пароль",
                  },
                })}
              />
            </div>
            <button className={classNames(s.button, "button")} type="button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
