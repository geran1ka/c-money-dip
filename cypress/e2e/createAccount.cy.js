// / <reference types="cypress" />
function loginMe(login, password) {
  cy.get('[name="login"]').type(login);
  cy.get('[name="password"]').type(password);
  cy.contains("Войти").click();
}

describe("C-Money", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Создать новый счет", () => {
    loginMe("developer", "methed");
    cy.get('[data-test="accounts"]')
      .find("li")
      .then(($accountsList) => {
        const accountLength = $accountsList.length;
        cy.get($accountsList).should("have.length", accountLength);
        cy.contains("Открыть новый счет").click();
        cy.get('[data-test="accounts"]')
          .find("li")
          .should("have.length.greaterThan", accountLength);
      });

    cy.get('[data-test="account"]')
      .last()
      .then(($account) => {
        const accountNumber = $account
          .find('[data-test="account-number"]')
          .text();
        const sum = 100;
        cy.get('[data-test="account"]').first().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });

    cy.get('[data-test="account"]')
      .first()
      .then(($account) => {
        const accountNumber = $account
          .find('[data-test="account-number"]')
          .text();
        const sum = 50;
        cy.get('[data-test="account"]').last().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });
  });
});
