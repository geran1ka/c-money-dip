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

  it("Проверка наличия элементов списка счетов", () => {
    loginMe("developer", "methed");
    cy.get('[data-test="accounts"]')
      .find("li")
      .should("have.length.greaterThan", 0);
  });
});
