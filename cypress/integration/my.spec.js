describe('my first suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('my first test', () => {
    cy.location('search').should('be.empty');
  });

});