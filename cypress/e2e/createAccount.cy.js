/// <reference types="cypress" />
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
    cy.get("._list_l10mq_148").find("li").should("have.length.greaterThan", 0);

    // const sum = 100;
    // cy.get('[name="to"]').type(account);
    // cy.get('[name="amount"]').type(sum);
    // cy.contains("Перевести").click();
  });

  it.only("Перевод с одного счета на другой нового счета", () => {
    loginMe("developer", "methed");
    cy.get("._card_l10mq_169").first().click();
    cy.get('[id="listSelect"]').get("option").last();

    // const sum = 100;
    // cy.get('[name="to"]').type(account);
    // cy.get('[name="amount"]').type(sum);
    // cy.contains("Перевести").click();
  });

  it("Создать новый счет", () => {
    loginMe("developer", "methed");
    // cy.contains("Открыть новый счет").click();
    cy.get("._id_1mdc4_2")
      .last()
      .then(($account) => {
        const accountNumber = $account.text();
        const sum = 100;
        cy.get("._card_l10mq_169").first().click();
        cy.get('[name="to"]').type(accountNumber);
        cy.get('[name="amount"]').type(sum);
        cy.contains("Перевести").click();
        cy.contains("Вернуться").click();
      });
  });
});
