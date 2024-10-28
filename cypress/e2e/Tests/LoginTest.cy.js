import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../Pages/LoginPage.cy";

const user = require("../../fixtures/registeredUser.json");
Given('I open the Magento url', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
});


When('I click on Sign In', () => {
    LoginPage.visitLoginPage();
});


Then('Login page should open', () =>{
    LoginPage.validateLoginPageUrl();
});


When('I fill in the login form', () => {
    LoginPage.enterEmail(user.email);
    LoginPage.enterPassword(user.password);
    LoginPage.clickLogin();
});


Then('I should be able to login', () =>{
    LoginPage.validateLoggedPageUrl()
});
