import classNames from "classnames";
import { getMessageErrorRu } from "../../../helper/getMessageErrorRu";
import { Container } from "../../Container/Container";
import s from "./Error.module.scss";
import { getIsRussianLanguage } from "../../../helper/getIsRussianLanguage";

export const Error = ({ error, className = "" }) => {
  const isRussianLanguage = /[а-яА-Я]/gi.test(error);
  console.log("isRussianLanguage: ", isRussianLanguage);

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

export const ErrorMini = ({ error, className = "" }) => {
  const isRussianLanguage = getIsRussianLanguage(error);
  console.log("isRussianLanguage: ", isRussianLanguage);

  return (
    <p className={classNames(s.error, className && className)}>
      {isRussianLanguage ? error : getMessageErrorRu(error)}
    </p>
  );
};
