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
