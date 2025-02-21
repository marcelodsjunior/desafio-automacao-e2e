/// <reference types="cypress" />

const elements = {
  HOME_PAGE: {
    CABECALHO_NAV: 'nav[class="header__navbar container"]'
  },

  VEICULOS_NOVOS_PAGE: {
    CARD_OFERTA_VEICULO_A: 'a[class="offers-fca-card__link"]'
  },

  DETALHES_VEICULO_PAGE: {
    ENVIO_LEAD_FORM: {
      NOME_CLIENTE_INPUT: 'input[name="name"]',
      EMAIL_CLIENTE_INPUT: 'input[name="email"]',
      TELEFONE_CLIENTE_INPUT: 'input[name="phone"]',
      CPF_CLIENTE_INPUT: 'input[name="cpf"]',
      ENVIAR_LEAD_BUTTON: 'button[type="submit"]',
      FEEDBACK_ENVIO_LEAD: 'div[class="form-message-overlay__top-message"]'
    }
  }
}

export default elements
