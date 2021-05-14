describe('my first suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('brand section should exist', () => {
    cy.get('[data-testid=brand]').should('exist');
  });

  it('should load all 27 contacts', () => {
    cy.get('article').should('have.length', 27);
  });

  it('should filter not-matching items', () => {
    cy.get('article').should('have.length', 27);
    cy.get('[data-testid=search]').type('lo');
    cy.get('article').should('have.length', 4);
  });  

  it('should clean filter when pressing "x"', () => {
    cy.get('[data-testid=search]').type('lo');
    cy.get('[data-testid=clean-filter]').click();
    cy.get('article').should('have.length', 27);
  });

});