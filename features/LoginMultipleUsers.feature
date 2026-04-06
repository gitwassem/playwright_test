Feature: Login to Test Application

    @smoke
    Scenario Outline: User should be able to enter username and password and login successfully
    Given Open the application URL
    When Enter the valid username "<username>" and password "<password>"
    Then Click the Sign In button
    Then User must be able to see the dashboard

    Examples:
      | username                             | password        |
      | sprint-37.2.1-issuer@username.com | Indexnine@123 |
      | shiss_01@uat.com | Indexnine@123 |