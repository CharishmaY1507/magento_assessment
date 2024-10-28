Feature: Magento Registration and Logout

  Scenario: Successful Account Creation
    Given the user is on the signup page
    When the user fills in the form with valid data
    And clicks the Create Account button
    Then the user should see a success message
    When the user clicks the account dropdown
    And the user selects the Sign Out option
    Then the user should be redirected to the logoutpage
    And the account welcome message should not be visible



