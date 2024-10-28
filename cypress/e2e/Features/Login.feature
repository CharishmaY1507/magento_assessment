Feature: Magento Login

  Scenario: Successful user login
    Given I open the Magento url
    When I click on Sign In
    Then Login page should open
    When I fill in the login form
    Then I should be able to login