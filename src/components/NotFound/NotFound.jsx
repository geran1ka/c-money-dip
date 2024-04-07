import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import s from "./NotFound.module.scss";
import classNames from "classnames";

export const NotFound1 = () => (
  <div className={s.notfound}>
    <div className={s.container}>
      <div className={s.sign}>
        <div className={s.neonBlue} id="title">
          4<span id="fade">0</span>4
        </div>
        <div>
          <p className={s.neonBlue}>страница не найдена</p>
          {/* <span className={s.neonPurple} id="trav"> */}
          {/* Enter
            </span>
            <span className={s.neonElov}>Show</span> */}
        </div>
      </div>
    </div>
    <a href="/" className={s.button}>
      На главную
    </a>
  </div>
);

export const NotFound = () => (
  <section>
    <Container className={s.container}>
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.text}>4</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>0</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>4</p>
          </li>
        </ul>

        <p className={s.textError}>
          Похоже вы ошиблись, такой страницы не существует!
        </p>

        <Link className={classNames(s.button, "button")} to="/">
          Вернуться на главную
        </Link>
      </div>
    </Container>
  </section>
);
