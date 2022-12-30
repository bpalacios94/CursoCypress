describe('Navegacion', ()=>{

    it('navegar a nuestra primera pagina', () => {
        cy.visit('https://www.platzi.com/')
    });

    it('Recargar la pagina', () => {
        cy.reload()
    });

    it('Recargar la pagina de forma forzada', () => {
        cy.visit('https://www.google.com/')
        cy.reload(true)
    });
    
    it.only('navegar hacia atras', () => {
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&rlz=1C1GCEU_esNI948NI948&oq=platzi&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j0i512l4j69i60l2.3031j0j1&sourceid=chrome&ie=UTF-8')
        cy.go('back')
        cy.go('forward')
    
    });

})