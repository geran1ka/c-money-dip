// / <reference types="cypress" />
function loginMe(login, password) {
  cy.get('[name="login"]').type(login);
  cy.get('[name="password"]').type(password);
  cy.contains("Войти").click();
}

describe("Тестируем ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Проверка наличия элементов списка счетов", () => {
    loginMe("developer", "methed");
    cy.get('[data-test="accounts"]')
      .find("li")
      .should("have.length.greaterThan", 0);
  });

  it.only("Создать новый счет", () => {
    loginMe("developer", "methed");
    cy.get('[data-test="accounts"]')
      .find("li")
      .then(($accountsList) => {
        const accountLength = $accountsList.length;
        cy.get($accountsList).should("have.length", accountLength);
        // cy.contains("Открыть новый счет").click();
        // cy.get('[data-test="accounts"]')
        //   .find("li")
        //   .should("have.length.greaterThan", accountLength);
      });

    cy.get('[data-test="account-number"]')
      .last()
      .then(($account) => {
        const accountNumber = $account.text();
        const sum = 1000;
        cy.get('[data-test="account"]').first().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });

    cy.get('[data-test="account-number"]')
      .first()
      .then(($account) => {
        const accountNumber = $account.text();
        const sum = 100;
        cy.get('[data-test="account"]').last().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });
  });

  it("Перевод с одного счета на другой нового счета", () => {
    loginMe("developer", "methed");

    cy.get('[data-test="account-number"]')
      .last()
      .then(($account) => {
        const accountNumber = $account.text();
        const sum = 100;
        cy.get('[data-test="account"]').first().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });
  });
});
