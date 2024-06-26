import classNames from "classnames";
import { Container } from "../Container/Container";
import s from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "../../store/auth/auth.slice";
import { useEffect } from "react";
import { ErrorMini } from "../UI/Error/Error";

export const Auth = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchAccessToken(data));
  };

  const { error } = useSelector((state) => state.auth);
  console.log("error: ", error);
  useEffect(() => {
    reset();
  }, [error, reset]);

  return (
    <Container>
      <div className={s.container}>
        <div className={s.wrapper}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <legend className={s.title}>Вход в аккаунт</legend>
            <div className={s.inputWrapper}>
              <span
                className={classNames(s.error, s.errorPosition)}
                data-test="auth-error-login">
                {errors.login && errors.login.message}
              </span>
              <label className={s.label}>Логин</label>
              <input
                className={s.input}
                {...register("login", {
                  required: {
                    value: true,
                    message: "Введите логин",
                  },
                  pattern: {
                    value: /^[a-zA-Z]{6,}$/,
                    message: "Невалидный логин",
                  },
                })}
                aria-invalid={!!errors.login}
              />
            </div>
            <div className={s.inputWrapper}>
              <span
                className={classNames(s.error, s.errorPosition)}
                data-test="auth-error-password">
                {errors.password && errors.password.message}
              </span>
              <label className={s.label}>Пароль</label>
              <input
                type="password"
                className={s.input}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Введите пароль",
                  },
                  pattern: {
                    value: /^[a-zA-Z]{6,}$/,
                    message: "Невалидный пароль",
                  },
                })}
                aria-invalid={!!errors.password}
              />
            </div>
            <button
              className={classNames(s.button, "button")}
              type="submit"
              data-test="btn-enter">
              Войти
            </button>
          </form>
          {error && (
            <ErrorMini className={s.error} error={error} test="auth-error" />
          )}
        </div>
      </div>
    </Container>
  );
};
