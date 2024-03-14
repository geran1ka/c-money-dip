import classNames from "classnames";
import { getMessageErrorRu } from "../../../helper/getMessageErrorRu";
import { Container } from "../../Container/Container";
import s from "./Error.module.scss";

export const Error = ({ error, className = "" }) => {
  const isRussianLanguage = /[а-я, А-Я]/gi.test(error);

  return (
    <Container>
      <div className={s.container}>
        <h2 className={classNames(s.error, className && className)}>
          {isRussianLanguage ? error : getMessageErrorRu(error)}
        </h2>
      </div>
    </Container>
  );
};

export const Error2 = ({ error, className = "" }) => {
  console.log("error: ", error);
  const isRussianLanguage = /[а-я, А-Я]/g.test(error);
  console.log("isRussianLanguage: ", isRussianLanguage);

  return (
    <div className={s.container2}>
      <h2 className={classNames(s.error, className && className)}>
        {isRussianLanguage ? error : getMessageErrorRu(error)}
      </h2>
    </div>
  );
};
