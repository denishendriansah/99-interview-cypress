/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe('99.co Singapore Home Page - Check Popular Projects Links', () => {
  beforeEach(() => {
    cy.visit('https://www.99.co/singapore');
  });

  it('should contain the text "Popular Projects"', () => {
    cy.get('div._1__lJ').contains('Popular projects').should('be.visible');
  });

  it('should check that links under "Popular Projects" work as expected', () => {
    cy.get('div[data-cy="popularProjects"]').within(() => {
      cy.get('a').each(($el) => {
        cy.wrap($el).should('be.visible');

        const projectName = $el.text().trim();
        let href = $el.attr('href');

        expect(href).to.not.be.empty;

        if (!href.startsWith('http')) {
          href = `https://www.99.co${href}`;
        }

        cy.visit(href);
        cy.visit('https://www.99.co/singapore');
        cy.get('div._1__lJ').contains('Popular projects', { timeout: 10000 }).should('be.visible');
      });
    });
  });
});
