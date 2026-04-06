Feature: Login Flow Validation

    @smoke
    Scenario: User should be able to login with valid credentials and validate button states
    Given Navigate to URL "https://uat.trellisplatform.com/issuers/pages/login"
    When Validate the button with text "SIGN IN" is disabled
    Then Enter email as "sprint-37.2.1-issuer@username.com" and password as "Indexnine@123"
    Then Validate the button with text " SIGN IN " is now enabled and click the button
    Then Validate 'Recent Activity' text is displayed