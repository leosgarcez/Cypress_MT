/// <reference types="cypress" />


describe('Formalização App Web', () => {
    it('successfully loads', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("229.421.221-53")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123258")
      cy.wait(7000)
      cy.get('#onesignal-slidedown-allow-button').click()
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe > .value_container___3XQWS').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Endereço
      cy.contains('Continuar').click() // Dados bancários
      cy.get('.action_container___23yhu > :nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Dados bancários
      cy.contains('moldura').should('be.visible')
    })
  })  

  describe('Formalização Android Devices', () => {
    beforeEach(() => {
      cy.viewport(360,640)
    })
    it('successfully loads Androd Devices', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("229.421.221-53")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123258")
      cy.wait(7000)
      cy.get('#onesignal-slidedown-allow-button').click()
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe > .value_container___3XQWS').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Endereço
      cy.contains('Continuar').click() // Dados bancários
      cy.get('.action_container___23yhu > :nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Dados bancários
      cy.contains('moldura').should('be.visible')
    })
  })  

  describe('Formalização iOS Devices', () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
    })
    it.only('successfully loads iPhopne Devices', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("229.421.221-53")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123258")
      cy.wait(7000)
      cy.get('#onesignal-slidedown-allow-button').click() 
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe > .value_container___3XQWS').click()
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Endereço
      cy.contains('Continuar').click() // Dados bancários
      cy.get('.action_container___23yhu > :nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
      cy.contains('Continuar').click() // Dados bancários
      cy.contains('moldura').should('be.visible')
    })
  })  