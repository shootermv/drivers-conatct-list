describe('my first suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('my first test', () => {
    cy.get('[data-testid=brand]').should('exist');
  });

  it('should load all', () => {
    cy.get('article').should('have.length', 27);
  });
});