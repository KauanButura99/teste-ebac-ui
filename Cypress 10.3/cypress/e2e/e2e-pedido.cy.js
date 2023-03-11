/// <reference types="cypress" />

describe("Teste de ponta a ponta em Saucelabs ", () => {
  it("Deve fazer o pedido de ponta a ponta ", () => {
    cy.visit("https://www.saucedemo.com/");

    //Login
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Adicionar o produto
    cy.contains("Sauce Labs Bike Light").click();
    cy.get(".btn_primary").click();
    cy.get('[data-test="back-to-products"]').click();

    cy.contains("Sauce Labs Backpack").click();
    cy.get(".btn_primary").click();
    cy.get('[data-test="back-to-products"]').click();

    //carrinho
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    //Cadastro
    cy.get('[data-test="firstName"]').type("Kauan");
    cy.get('[data-test="lastName"]').type("Butura");
    cy.get('[data-test="postalCode"]').type("02680-090");
    cy.get('[data-test="continue"]').click();

    //Finish
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order");
  });
});
