class LoginPage{
    get emailField(){
        return cy.get('#email');
    }


    get passwordField(){
        return cy.get('#pass');
    }
   
    visitLoginPage(){
        cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }


    validateLoginPageUrl(){
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }


    enterEmail(email){
        this.emailField.type(email);
    }


    enterPassword(password){
        this.passwordField.type(password);
    }


    clickLogin(){
        cy.contains('#send2', 'Sign In').click();
    }
    
    validateLoggedPageUrl(){
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/');
    }

}


module.exports = new LoginPage();
