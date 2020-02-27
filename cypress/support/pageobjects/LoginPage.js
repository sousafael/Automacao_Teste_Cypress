/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
const email = Cypress.config("email")
const senha = Cypress.config("senha")

class LoginPage {
    // Acessa o site da Lojinha
    acessarSite() {
        cy.visit(url)
    }

    // Digita o usuario a senha e clique no botão entrar
    digitarLogin() {
        cy.get(loginElements.usuario()).type(email)
        cy.get(loginElements.senha()).type(senha)
        cy.get(loginElements.botaoEntrar()).click()
    }
  
    // Verifica se entrou na Página secreta validando o nome de boas vindas
    visualizarPaginaSecreta() {
        cy.get(loginElements.paginaSecreta).should('contain', 'Boas vindas, Administrador!').screenshot()
    }
}

export default LoginPage;