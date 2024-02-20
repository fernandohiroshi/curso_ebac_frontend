describe("testes agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("verificar 3 contatos", () => {
    cy.get(".sc-dmqHEX").should("have.length", 1);
  });

  it("verificar button edit", () => {
    cy.get(".edit").click();
  });

  it("verificar button delete", () => {
    cy.get(".delete").click();
  });
});
