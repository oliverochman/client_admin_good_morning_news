describe("Journalist can create article", () => {
  beforeEach(() => {
    cy.login();
  });

  context("succesfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles*",
        response: "fixture:articles_create_success.json",
      });
    });

    it("with title and content", () => {
      cy.get("[data-cy='title']").type("An absolutely article fantastic");
      cy.get("[data-cy='content']").type("Article content");
      cy.get("");
    });
  });
});
