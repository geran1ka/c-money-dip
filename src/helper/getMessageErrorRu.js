export const getMessageErrorRu = (error) => {
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
      messageErrorRu =
        "Не указана окончательный перевод, или она отрицательная!";
      break;
    case "Overdraft prevented":
      messageErrorRu =
        "У Вас недостаточно средств, для выполнения перевода указанной суммы!";
      break;
    default:
      messageErrorRu = "Что-то пошло не так!";
  }

  return messageErrorRu;
};
