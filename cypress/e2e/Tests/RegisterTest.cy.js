import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import RegisterPage from '../Pages/RegisterPage.cy';
const user = require("../../fixtures/user.json");

Given('the user is on the signup page', () => {
  RegisterPage.navigateToSignup();
});

When('the user fills in the form with valid data', () => {
  RegisterPage.enterFirstName(user.firstName);
  RegisterPage.enterLastName(user.lastName);
  RegisterPage.enterEmail(user.email);
  RegisterPage.enterPassword(user.password);
});

When('clicks the Create Account button', () => {
  RegisterPage.clickCreateAccount();
});

Then('the user should see a success message', () => {
  RegisterPage.verifySuccessMessage();
});

When('the user clicks the account dropdown', () => {
    RegisterPage.clickProfile(); 
});

And('the user selects the Sign Out option', () => { 
    RegisterPage.clickSignOut();
});

Then('the user should be redirected to the logoutpage', () => { 
    RegisterPage.verifyLogoutSuccess();
});

And('the account welcome message should not be visible', () => {
    RegisterPage.verifyWelcomeMessage();
});



