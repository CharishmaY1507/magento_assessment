class RegisterPage {
    
    navigateToSignup() {
      cy.visit('/customer/account/create/');
    }
  
    enterFirstName(firstName) {
      cy.get('#firstname').type(firstName);
    }
  
    enterLastName(lastName) {
      cy.get('#lastname').type(lastName);
    }
  
    enterEmail(email) {
      cy.get('#email_address').type(email);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    clickCreateAccount() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    verifySuccessMessage() {
      cy.contains('Thank you for registering').should('be.visible');
    }

    clickProfile() {
        cy.get('button[data-action="customer-menu-toggle"]').first().click();
    }

    verifyRedirectToLogoutpage() {
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/');
    }

    clickSignOut() {
        cy.get('ul.header.links li a[href*="logout"]').first().click();
    }
    verifyLogoutSuccess() {
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/');
    }
    
    verifyWelcomeMessage(){
        cy.get('.customer-welcome').should('not.exist')
    }
  }
  
  module.exports = new RegisterPage();
  
  