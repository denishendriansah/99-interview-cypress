/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe('99.co Singapore Home Page - Check Search Filters', () => {
  beforeEach(() => {
    cy.visit('https://www.99.co/singapore');
  });

  it('should contain the search title "Singapore\'s Smarter Property Search"', () => {
    cy.contains("Singapore's Smarter Property Search").should('be.visible');
  });

  it('should check that all filters under the "Buy" tab are available', () => {
    cy.get('label[for="search_category_sale"]').click();

    const buyFilters = ['Price range', 'Property type', 'Bedrooms'];

    buyFilters.forEach((filter) => {
      cy.contains(filter).should('be.visible');
    });
  });

  it('should check that all filters under the "Rent" tab are available', () => {
    cy.get('label[for="search_category_rent"]').click();

    const rentFilters = ['Price range', 'Property type', 'Bedrooms', 'Rental type'];

    rentFilters.forEach((filter) => {
      cy.contains(filter).should('be.visible');
    });
  });
});
