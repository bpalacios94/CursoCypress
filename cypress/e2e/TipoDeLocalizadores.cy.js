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
it('Obtenerlo por medio de un atributo y un tag', () => {
    cy.visit('/automation-practice-form')
    cy.get('input[placeholder="First Name"]')
    cy.once('uncaught:exception', () => false)
    
})

it.only('Obtenerlo por medio de una class', () => {
    cy.visit('/automation-practice-form')
    cy.get('.mr-sm-2.form-control') // aqui venia con un espacio, pero se le quita el espacio y pone un punto (.) porque son 2 clases
    cy.once('uncaught:exception', () => false)
    
})

})