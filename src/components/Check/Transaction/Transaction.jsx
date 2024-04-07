import classNames from "classnames";
import s from "./Transaction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchTransferAmount } from "../../../store/account/account.slice";
import { randomId } from "../../../helper/randomId";
import { ErrorMini } from "../../UI/Error/Error";
import { useEffect, useState } from "react";

export const Transaction = () => {
  const dispatch = useDispatch();
  const errorTransferAmount = useSelector(
    (state) => state.account.errorTransferAmount,
  );
  const { accounts } = useSelector((state) => state.accounts);
  const { account } = useSelector((state) => state.account.account);
  console.log("account: ", account);
  const [accountTo, setAccountTo] = useState("");

  // const handlerOnchange = (e) => {
  //   console.log("e: ", e);
  //   setAccountTo(e.target.input.value);
  //   console.log("e.target.value): ", e.target.value);
  // };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const to = watch("to");

  useEffect(() => {
    const defaultValues = {};
    defaultValues.to = "---";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data) => {
    console.log("data: ", data);
    dispatch(fetchTransferAmount(data));
    reset();
  };

  return (
    <div className={s.transaction} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={classNames(s.title)}>Перевод</h3>
      <form className={s.form}>
        <div className={s.wrap}>
          <span className={s.error}>{errors.to && errors.to.message}</span>
          <label className={s.label}>Счет</label>
          <input
            className={s.input}
            list="listSelect"
            {...register("to", {
              required: "Заполните это поле",
              pattern: {
                value: /^\d+$/,
                message: "Некорректный номер счета",
              },
            })}
          />
          <datalist id="listSelect">
            {accounts.length &&
              accounts.map((item) => (
                <option key={randomId()} value={item.account}>
                  {item.account}
                </option>
              ))}
          </datalist>
        </div>
        <div className={s.wrap}>
          <span className={s.error}>
            {errors.amount && errors.amount.message}
          </span>
          <label className={s.label}>Сумма</label>
          <input
            className={s.input}
            {...register("amount", {
              required: "Заполните это поле",
              pattern: {
                value: /^([0-9]*[.])?[0-9]+$/,
                message: "Некорректная сумма",
              },
            })}
          />
        </div>
        <button
          type="submit"
          className={classNames(s.button, "button")}
          disabled={account === to}>
          Перевести
        </button>
        {errorTransferAmount && (
          <ErrorMini className={s.errorMini} error={errorTransferAmount} />
        )}
      </form>
    </div>
  );
};
