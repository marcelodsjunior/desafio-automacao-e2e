/// <reference types="cypress" />

const el = require('./elements')

Cypress.Commands.add('acessarAnunciosNovos', (idVeiculoTeste) => {
  cy.intercept('POST', '**/offers/search', (req) => {
    req.reply((res) => {
      const { hit } = res.body.hits
      const veiculoAlvo = hit.find((item) => item.fields.id === idVeiculoTeste)
      res.body.hits.hit = [
        veiculoAlvo,
        ...hit.filter((item) => item.fields.id !== idVeiculoTeste)
      ]
      return res
    })
  }).as('veiculosNovos')

  cy.visit('/')
  cy.wait('@veiculosNovos').its('response.statusCode').should('eq', 200)

  cy.get(el.HOME_PAGE.CABECALHO_NAV).find('li').contains('Novos').click()

  cy.url().should('include', '/novos')
})

Cypress.Commands.add('acessarInternaDoVeiculo', (idVeiculoTeste) => {
  cy.window().then((win) => win.scrollTo(0, 1000))

  cy.get(el.VEICULOS_NOVOS_PAGE.CARD_OFERTA_VEICULO_A)
    .first()
    .should('be.visible')
    .click()

  cy.url().should('include', idVeiculoTeste)
})

Cypress.Commands.add('validarFeedbackEnvioLead', () => {
  cy.intercept('POST', '**/latest/').as('latest')
  cy.getNome().then((nome) => {
    cy.get(el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.NOME_CLIENTE_INPUT).type(
      nome
    )
  })

  cy.getEmail().then((email) => {
    cy.get(el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.EMAIL_CLIENTE_INPUT).type(
      email
    )
  })

  cy.getTelefone().then((telefone) => {
    cy.get(
      el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.TELEFONE_CLIENTE_INPUT
    ).type(telefone)
  })

  cy.getCPF().then((cpf) => {
    cy.get(el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.CPF_CLIENTE_INPUT).type(cpf)
  })

  cy.get(el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.ENVIAR_LEAD_BUTTON).click()
  cy.wait('@latest').its('response.statusCode').should('eq', 200)

  cy.get(el.DETALHES_VEICULO_PAGE.ENVIO_LEAD_FORM.FEEDBACK_ENVIO_LEAD)
    .should('be.visible')
    .should('contain.text', 'Solicitação realizada com sucesso!')
})
