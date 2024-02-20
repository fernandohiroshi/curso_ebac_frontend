describe("testes agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("verificar 2 contatos", () => {
    cy.get(".sc-dmqHEX").should("have.length", 2);
  });

  it("verificar button edit", () => {
    cy.get(".edit").first().click();
  });

  it("verificar button delete", () => {
    cy.get(".delete").first().click();
  });
});
