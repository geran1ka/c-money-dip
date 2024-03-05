import s from "./Dinamic.module.scss";

export const Dinamic = () => {
  const filterArrYear = (arr, year) =>
    arr.filter((item) => new Date(item.date).getFullYear() === +year);

  console.log("Dinamic");
  return (
    <div className={s.dynamic}>
      <div className={s.header}>
        <h3 className={s.title}>Динамика</h3>
        <span className={s.year}>2022</span>
        <select className={s.select}>
          <option hidden={true}>Год</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
    </div>
  );
};
