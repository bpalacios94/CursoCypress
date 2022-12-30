describe('Tipos de Localizadores', () => { 

it('Obtenerlo por medio de un tag', () => {
    cy.visit('/automation-practice-form')
    cy.get('input')
    cy.once('uncaught:exception', () => false)
})

it('Obtenerlo por medio de un atributo', () => {
    cy.visit('/automation-practice-form')
    cy.get('[placeholder="First Name"]')
    cy.once('uncaught:exception', () => false)
    
})

it('Obtenerlo por medio de un id', () => {
    cy.visit('/automation-practice-form')
    cy.get('#firstName')
    cy.once('uncaught:exception', () => false)
    
})

})