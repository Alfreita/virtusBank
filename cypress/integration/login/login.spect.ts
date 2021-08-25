///<reference types="cypress"/>
describe("should access login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should have logon container", () => {
    cy.get(".logon-container");
  });
  it("should have user label with User value", () => {
    cy.get(":nth-child(1) > label").should("have.text", "User");
  });
  it("should have Password label with Password value", () => {
    cy.get(":nth-child(2) > label").should("have.text", "Password");
  });
  it("Should have submit button", () => {
    cy.get(".submit-button");
    cy.get(".submit-button > label").should("have.text", "Login");
  });
  it("Should have link to create account", () => {
    cy.get("a").should("have.text", "Create account");
  });
  it("Should have User input with empty value ", () => {
    cy.get(":nth-child(1) > .input").should("have.text", "");
  });
  it("Should have Password input with empty value ", () => {
    cy.get(":nth-child(2) > .input").should("have.text", "");
  });
  it("Should have User input with email value ", () => {
    const email = "dummy.dummy@hotmail.com";
    cy.get(":nth-child(1) > .input").type(`${email}`);
    cy.get(":nth-child(1) > .input").should("have.value", email);
  });
  it("Should have Password input with password value ", () => {
    const password = "1234";
    cy.get(":nth-child(2) > .input").type(`${password}`);
    cy.get(":nth-child(2) > .input").should("have.value", password);
  });
  it("Should have link to create account", () => {
    cy.get("a").should("have.text", "Create account");
  });
  it("Should sign in virtus bank", () => {
    const email = "dummy.dummy@hotmail.com";
    cy.get(":nth-child(1) > .input").type(`${email}`);
    cy.get(":nth-child(1) > .input").should("have.value", email);
    const password = "1234";
    cy.get(":nth-child(2) > .input").type(`${password}`);
    cy.get(":nth-child(2) > .input").should("have.value", password);
    cy.get('.submit-button').click()
  });
});
