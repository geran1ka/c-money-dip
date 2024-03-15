import classNames from "classnames";
import s from "./ChangeCurrency.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { randomId } from "../../../helper/randomId";
import { useForm } from "react-hook-form";
import { fetchAllCurreency } from "../../../store/allCurrency/allCurrency.slice";
import { fetchCurrencyBy } from "../../../store/myCurrency/myCurrency.slice";
import { ErrorMini } from "../../UI/Error/Error";

export const ChangeCurrency = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const { allCurrency, loading, error } = useSelector(
    (state) => state.allCurrency,
  );

  const { error: errorBy } = useSelector((state) => state.myCurrency);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  // const DEFAULT_VALUE = {
  //   to: getValues("to"),
  //   from: getValues("from"),
  // };

  // const [currency, setCurrency] = useState(DEFAULT_VALUE);
  // console.log("currency: ", currency);

  // const [isDisabled, setIsDisabled] = useState(true);
  // console.log("isDisabled: ", isDisabled);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchAllCurreency());
    }
  }, [dispatch, accessToken]);

  // useEffect(() => {
  //   setCurrency({ to: getValues("to"), from: getValues("from") });
  // }, []);

  const from = watch("from");
  console.log("from: ", from);
  const to = watch("to");
  console.log("to: ", to);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.from = [...allCurrency].sort()[0] || "";
    defaultValues.to = [...allCurrency].sort()[0] || "";
    reset({ ...defaultValues });
  }, [reset, allCurrency]);

  // const onChange = (e) => {
  //   console.log(e.target.value);
  //   console.log(currency.to === currency.from);
  //   if (currency.to === currency.from) {
  //     setIsDisabled(true);
  //   } else {
  //     setIsDisabled(false);
  //   }
  //   const { name, value } = e.target;
  //   setCurrency({ ...currency, [name]: value });
  // };

  const onSubmit = (data) => {
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
            <select className={s.input} {...register("from")} value={from}>
              {allCurrency?.length > 0 &&
                [...allCurrency]
                  .sort()
                  .filter((item) => item.amount !== 0)
                  .map((item) => (
                    <option key={randomId()} value={item}>
                      {item}
                    </option>
                  ))}
            </select>
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label}>Куда</label>
            <select className={s.input} {...register("to")} value={to}>
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
          disabled={to === from}>
          Обменять
        </button>
      </form>
      {errorBy && <ErrorMini error={errorBy} />}
    </div>
  );
};
