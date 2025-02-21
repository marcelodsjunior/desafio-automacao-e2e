/// <reference types="cypress" />

describe('Testes de geração de lead', () => {
  it('Deve enviar um lead com sucesso ao acessar um anúncio recente', () => {
    cy.acessarAnunciosNovos('540116')
    cy.acessarInternaDoVeiculo('540116')
    cy.validarFeedbackEnvioLead()
  })
})
