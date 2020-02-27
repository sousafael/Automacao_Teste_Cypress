/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site da lojinha", () => {
    loginPage.acessarSite();
})

When("digita  o login", () => {
    loginPage.digitarLogin();
})

Then("deverá visualizar a Pagina Secreta", () => {
    loginPage.visualizarPaginaSecreta();
})