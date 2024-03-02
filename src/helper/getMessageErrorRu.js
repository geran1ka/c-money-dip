export const getMessageErrorRu = (error) => {
  let messageErrorRu = "";

  switch (error) {
    case "No such user":
      messageErrorRu = "Пользователя с таким именем не существует!";
      break;
    case "Invalid password":
      messageErrorRu = "Вы ввели не верный пароль!";
      break;
    case "Invalid route":
      messageErrorRu = "Некорректный адрес сервера ";
      break;
    default:
      messageErrorRu = "Что-то пошло не так";
  }

  return messageErrorRu;
};
