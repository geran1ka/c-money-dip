import s from "./Main.module.scss";

export const Main = () => {
  console.log("main");

  return (
    <main className={s.main}>
      <p>Main</p>
    </main>
  );
};
