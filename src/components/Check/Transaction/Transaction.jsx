import classNames from "classnames";
import s from "./Transaction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchTransferAmount } from "../../../store/account/account.slice";

export const Transaction = () => {
  const dispatch = useDispatch();
  const transactionError = useSelector((state) => state.account.error);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("to", {
              required: "Заполните это поле",
              pattern: {
                value: /^\d+$/,
                message: "Некорректный номер счета",
              },
            })}
          />
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
        <button className={classNames(s.button, "button")}>Перевести</button>
        {transactionError && <p className={s.error}>{transactionError}</p>}
      </form>
    </div>
  );
};
