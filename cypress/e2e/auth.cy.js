/// <reference types="cypress" />

export function loginMe(login, password) {
  if (login) {
    cy.get('[name="login"]').type(login);
  }
  if (password) {
    cy.get('[name="password"]').type(password);
  }
  cy.contains("Войти").click();
}

describe("Тестируем ", () => {
  beforeEach(() => {
    cy.visit("https://c-money-dip.vercel.app/");
  });

  it("Авторизация, не валидный логин - цифра", () => {
    loginMe("developer1", "methed");
    cy.get('[data-test="auth-error-login"]').contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - кириллица", () => {
    loginMe("developerк", "methed");
    cy.get("._error_acsk9_145 ").contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - меньше 6 символов", () => {
    loginMe("deve", "methed");
    cy.get("._error_acsk9_145 ").contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - пустое поле", () => {
    loginMe("", "methed");
    cy.get("._error_acsk9_145 ").contains("Введите логин");
  });

  it("Авторизация, не верный логин", () => {
    loginMe("developers", "methed");
    cy.get("._error_2j6oj_22 ").contains(
      "Пользователя с таким именем не существует!",
    );
  });

  it("Авторизация, не валидный пароль - цифра", () => {
    loginMe("developer", "methed1");
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - кириллица", () => {
    loginMe("developer", "methedк");
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - меньше 6 символов", () => {
    loginMe("developer", "meteh");
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - пустое поле", () => {
    loginMe("developer", "");
    cy.get("._error_acsk9_145 ").contains("Введите пароль");
  });

  it("Авторизация, не верный пароль", () => {
    loginMe("developer", "methedo");
    cy.get("._error_2j6oj_22 ").contains("Вы ввели не верный пароль!");
  });

  it("Авторизация - успех", () => {
    loginMe("developer", "methed");
    cy.request("POST", "https://c-money-api.onrender.com/login", {
      login: "developer",
      password: "methed",
    }).then((data) => {
      expect(data.status).to.eq(200);
    });
    cy.get("._title_l10mq_21 ").contains("Здравствуйте, Александр!");
  });
});
