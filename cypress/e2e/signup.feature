Feature: SignUp Journey

    As a new user, I should be able to signup successfully

    Scenario: Successful registration with valid credentials
        Given I click signup button
        When I fill in the username
        And I fill in the business name
        And I fill in the business email
        And I fill the phone number
        And I fill in the business registration number
        And I click the next button
        And I select Instagram as how I heard about Mima
        And I fill in the password
        And i click signup button
        Then I should see the OTP page
        When I insert the OTP
        Then I should see the dashboard
