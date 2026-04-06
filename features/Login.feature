Feature: Login to Test Application

    @smoke
    Scenario: User should be able to enter username and password and login successfully
    Given Open the application URL
    When Enter the valid username "sprint-37.2.1-issuer@username.com" and password "Indexnine@123"
    Then Click the Sign In button
    Then User must be able to see the dashboard