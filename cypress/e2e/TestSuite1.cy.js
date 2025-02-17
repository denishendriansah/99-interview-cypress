/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe('99.co Singapore Home Page - Check H2 Titles', () => {
  beforeEach(() => {
    cy.visit('https://www.99.co/singapore')
  })

  it('should contain the H2 title "Featured Projects"', () => {
    cy.get('div._1__lJ').contains('Featured projects').should('be.visible')
  })

  it('should contain the H2 title "Popular Projects"', () => {
    cy.get('div._1__lJ').contains('Popular projects').should('be.visible')
  })

  it('should contain the H2 title "Find your property value instantly"', () => {
    cy.get('h2').contains('Find your property value instantly').should('be.visible')
  })

  it('should contain the H2 title "Listings with videos"', () => {
    cy.get('div._1__lJ').contains('Listings with videos').should('be.visible')
  })
  
  // Can't find this title in the page
  /* it('should contain the H2 title "View these via video call"', () => {
    cy.contains('View these via video call').should('be.visible')
  }) */

  it('should contain the H2 title "Popular listings"', () => {
    cy.get('div._1__lJ').contains('Popular listings').should('be.visible')
  })

  it('should contain the H2 title "Featured stories"', () => {
    cy.get('div._1__lJ').contains('Featured stories').should('be.visible')
  })

  it('should contain the H2 title "Listings found only on 99"', () => {
    cy.get('div._1__lJ').contains('Listings found only on 99').should('be.visible')
  })

  it('should contain the H2 title "Latest New Launches"', () => {
    cy.get('h2').contains('Latest New Launches').should('be.visible')
  })

  it('should contain the H2 title "Explore 99.co"', () => {
    cy.contains('Explore 99.co').should('be.visible')
  })
})
