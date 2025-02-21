/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Comando para obter um nome completo utilizando faker-br
         *
         * @example
         *    cy.getNome()
         */
        getNome(): Chainable<any>

        /**
         * Comando para obter um email utilizando faker-br
         *
         * @example
         *    cy.getEmail()
         */
        getEmail(): Chainable<any>

        /**
         * Comando para obter um CPF utilizando faker-br
         *
         * @example
         *    cy.getCPF()
         */
        getCPF(): Chainable<any>

        /**
         * Comando para obter um número de telefone utilizando faker-br
         *
         * @example
         *    cy.getTelefone()
         */
        getTelefone(): Chainable<any>

        /**
         * Comando para acessar a página de novos anúncios através da home
         * e fazer com que o veículo desejado seja exibido em primeiro lugar na listagem
         * garantindo resiliencia ao teste
         * @example
         *    cy.acessarAnunciosNovos(idVeiculoTeste)
         */
        acessarAnunciosNovos(idVeiculoTeste: string): Chainable<any>

        /**
         * Comando para acessar a página de detalhes de um veículo
         * garantindo que os detalhes sejam do veículo desejado
         * 
         * @example
         *    cy.acessarInternaDoVeiculo(idVeiculoTeste)
         */
        acessarInternaDoVeiculo(idVeiculoTeste: string): Chainable<any>

        /**
         * Comando para preencher e enviar o formulário de lead
         * utilizando dados fictícios gerados pelo faker-br
         * @example
         *    cy.validarFeedbackEnvioLead(idVeiculoTeste)
         */
        validarFeedbackEnvioLead(idVeiculoTeste: string): Chainable<any>

    }
}
