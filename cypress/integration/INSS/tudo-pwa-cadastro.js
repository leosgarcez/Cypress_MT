/// <reference types="cypress" />

/// WEB DEVICES


describe('Cadastro Web Device', () => {
  it('Informar CPF', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    //cy.wait(2000)
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('.input___11dPn').type("355.880.488-06") // CPF RETIRAO DO BACKOFFICE DE PROD PARA FINS DE TESTE - CONTÉM MATRÍCULA DE INSS
    cy.get('.false > .button_container___Tboql').click()
    cy.wait(2000)
    cy.contains('Token').should('be.visible')
  })
}) 


// ANDROID DEVICES
 
    describe('Cadastro Android Device', () => {
      beforeEach(() => {
          cy.viewport(360,640)
        })
        it('Informar CPF', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
          cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          cy.get('#retired_or_pensioner').click()
          cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
          cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
          cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
          //cy.wait(2000)
          cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          cy.get('.input___11dPn').type("355.880.488-06") // CPF RETIRAO DO BACKOFFICE DE PROD PARA FINS DE TESTE - CONTÉM MATRÍCULA DE INSS
          cy.get('.false > .button_container___Tboql').click()
          cy.wait(2000)
          cy.contains('Token').should('be.visible')
        })
      }) 


// IOS DEVICES

describe('Cadastro iOS Device', () => {
beforeEach(() => {
  cy.viewport('iphone-x')
  })
  it('Informar CPF', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('#retired_or_pensioner').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('.input___11dPn').type("355.880.488-06") // CPF RETIRAO DO BACKOFFICE DE PROD PARA FINS DE TESTE - CONTÉM MATRÍCULA DE INSS
    cy.get('.false > .button_container___Tboql').click()
    cy.wait(2000)
    cy.contains('Token').should('be.visible')
  })
}) 