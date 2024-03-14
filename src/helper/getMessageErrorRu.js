export const getMessageErrorRu = (error) => {
  console.log("error: ", error);
  let messageErrorRu = "";

  switch (error) {
    case "No such user":
      messageErrorRu = "Пользователя с таким именем не существует!";
      break;
    case "Invalid password":
      messageErrorRu = "Вы ввели не верный пароль!";
      break;
    case "No such account":
      messageErrorRu = "Аккаунт не найден!";
      break;
    case "Invalid route":
      messageErrorRu = "Некорректный адрес сервера! ";
      break;
    case "Unauthorized":
      messageErrorRu = "Вы неавторизированы! ";
      break;
    case "Invalid account from":
      messageErrorRu =
        "Не указан адрес счёта написания, или этот счёт нам не принадлежит!";
      break;
    case "Invalid account to":
      messageErrorRu =
        "Не указан счёт зачисления, или этого счёта не существует!";
      break;
    case "Invalid amount":
      messageErrorRu = "Не указана сумма перевода!";
      break;
    case "Overdraft prevented":
      messageErrorRu = "Недостаточно средств на счёте списания!";
      break;
    case "Unknown currency code":
      messageErrorRu = "Неверный валютный код!";
      break;
    case "Not enough currency":
      messageErrorRu = "На валютном счёте списания нет средств!";
      break;
    default:
      messageErrorRu = "Что-то пошло не так!";
  }

  return messageErrorRu;
};
