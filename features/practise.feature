Feature: Self practice

    @smoke
    Scenario: User should be able to practice
    Given Navigate to the URL "https://dotesthere.com/"
    When Validate the text "Web Elements Playground" is displayed
    When Button is clicked
    Then Validate toast is displayed with text "Challenging DOM refreshed!"
    Then Select option from dropdown
    Then Upload the file
   
    