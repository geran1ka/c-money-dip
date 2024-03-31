/// <reference types="cypress" />

describe("Тестируем ", () => {
  beforeEach(() => {
    cy.visit("https://c-money-dip.vercel.app/");
  });

  it("Создание нового счета", () => {
    cy.get('[name="login"]').type("developer");
    cy.get('[name="password"]').type("methed");
    cy.get("._button_acsk9_126 ").click();
    cy.get("._card_l10mq_169:first-child").click();

    // cy.get('option:last-child')
    // cy.contains("Открыть новый счет").click();
  });
});
