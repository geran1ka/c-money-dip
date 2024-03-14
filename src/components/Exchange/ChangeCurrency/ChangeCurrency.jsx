import classNames from "classnames";
import s from "./ChangeCurrency.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { randomId } from "../../../helper/randomId";
import { useForm } from "react-hook-form";
import { fetchAllCurreency } from "../../../store/allCurrency/allCurrency.slice";
import { fetchCurrencyBy } from "../../../store/myCurrency/myCurrency.slice";
import { Error, Error2 } from "../../UI/Error/Error";

export const ChangeCurrency = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const { allCurrency, loading, error } = useSelector(
    (state) => state.allCurrency,
  );

  const { error: errorBy } = useSelector((state) => state.myCurrency);
  console.log("errorBy: ", errorBy);

  const [currency, setCurrency] = useState({
    to: "",
    from: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchAllCurreency());
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    setCurrency({ to: getValues("to"), from: getValues("from") });
  }, [getValues]);

  const onChange = (e) => {
    if (currency.to === currency.from) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    const { name, value } = e.target;
    setCurrency({ ...currency, [name]: value });
  };

  const onSubmit = (data) => {
    console.log("data: ", data);
    console.log(data);
    dispatch(fetchCurrencyBy(data));
    reset();
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Обмен валюты</h3>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <legend className={s.legend}>
          <div className={s.inputWrapper}>
            <label className={s.label}>Откуда</label>
            <select
              className={s.input}
              {...register("from")}
              value={currency.from}
              onChange={onChange}>
              {allCurrency?.length > 0 &&
                [...allCurrency].sort().map((item) => (
                  <option key={randomId()} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label}>Куда</label>
            <select
              className={s.input}
              {...register("to")}
              value={currency.to}
              onChange={onChange}>
              {allCurrency?.length > 0 &&
                [...allCurrency].sort().map((item) => (
                  <option key={randomId()} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className={s.inputWrapper}>
            <span className={s.error}>
              {errors.amount && errors.amount.message}
            </span>
            <label className={s.label}>Сумма</label>
            <input
              className={s.input}
              type="text"
              {...register("amount", {
                required: "Заполните это поле",
                pattern: {
                  value: /^([0-9]*[.])?[0-9]+$/,
                  message: "Некорректная сумма",
                },
              })}
            />
          </div>
        </legend>
        <button
          className={classNames(s.button, "button")}
          disabled={isDisabled}>
          Обменять
        </button>
      </form>
      {errorBy && <Error2 error={errorBy} />}
    </div>
  );
};
