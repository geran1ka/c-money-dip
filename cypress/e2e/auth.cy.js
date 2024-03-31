/// <reference types="cypress" />

describe("Тестируем ", () => {
  beforeEach(() => {
    cy.visit("https://c-money-dip.vercel.app/");
  });

  it("Авторизация, не валидный логин - цифра", () => {
    cy.get('[name="login"]').type("developer1");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - кириллица", () => {
    cy.get('[name="login"]').type("developerк");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - меньше 6 символов", () => {
    cy.get('[name="login"]').type("deve");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный логин");
  });

  it("Авторизация, не валидный логин - пустое поле", () => {
    cy.get('[name="login"]');
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Введите логин");
  });

  it("Авторизация, не верный логин", () => {
    cy.get('[name="login"]').type("developers");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_2j6oj_22 ").contains(
      "Пользователя с таким именем не существует!",
    );
  });

  it("Авторизация, не валидный пароль - цифра", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("methed1");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - кириллица", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("methedк");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - меньше 6 символов", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("meteh");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Невалидный пароль");
  });

  it("Авторизация, не валидный пароль - пустое поле", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]');
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_acsk9_145 ").contains("Введите пароль");
  });

  it("Авторизация, не верный пароль", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("methedo");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._error_2j6oj_22 ").contains("Вы ввели не верный пароль!");
  });

  it("Авторизация - успех", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.request("POST", "https://c-money-api.onrender.com/login", {
      login: "developer",
      password: "methed",
    }).then((data) => {
      expect(data.status).to.eq(200);
    });
    cy.get("._title_l10mq_21 ").contains("Здравствуйте, Александр!");
  });
});
