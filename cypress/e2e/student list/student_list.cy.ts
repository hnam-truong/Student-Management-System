beforeEach(() => {
  cy.login("A", "Admin@123");
});
describe("Student List Component", () => {
  it("successfully submits form", () => {
    cy.visit("/students");
    cy.contains(".edit-container-list", "Student List").should("be.visible");
  });
});
