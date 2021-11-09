/// <reference types="cypress" />

describe("Simulation", () => {
    beforeEach(() => cy.visit("https://web.homolog.meutudo.app/intro"));


    it("Simulation with Full Value", () => {
        cy.contains('Entrar').click();
        cy.get('.input___11dPn').type('26195645818');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type('123124')
        cy.wait(7000)
        cy.get('#onesignal-slidedown-allow-button').click()
        cy.get('.container___3g-7G').click()
        cy.get('.button___kc84O > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        cy.contains('Continuar').click()
        cy.get(':nth-child(1) > .radio_input___3iS67').click()
        cy.contains('Continuar').click()
        cy.contains('Permitir').click()
        cy.contains('Continuar').click()
        cy.contains('moldura').should('be.visible')
    })
})