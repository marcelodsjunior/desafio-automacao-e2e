/// <reference types="cypress" />

const faker = require('faker-br')
faker.setLocale('pt_BR')

function getNome () {
  return cy.wrap(faker.name.findName() + ' ' + faker.name.lastName())
}

Cypress.Commands.add('getNome', getNome)

function getEmail () {
  return cy.wrap(faker.internet.email())
}

Cypress.Commands.add('getEmail', getEmail)

function getTelefone () {
  const ddd = faker.random.number({ min: 11, max: 99 }).toString()
  const numero = faker.random
    .number({
      min: 900000000,
      max: 999999999
    })
    .toString()

  return cy.wrap(ddd + numero)
}

Cypress.Commands.add('getTelefone', getTelefone)

function getCPF () {
  return cy.wrap(faker.br.cpf())
}

Cypress.Commands.add('getCPF', getCPF)
