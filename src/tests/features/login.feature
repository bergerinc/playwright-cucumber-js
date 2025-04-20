Feature: User Authentication Tests

  Background: 
    Given The user is on the login page "https://practicetestautomation.com/practice-test-login/"

  Scenario: A user should login successfully
  When User provides a valid username "student"
  And User provides a valid password "Password123"
  And User clicks the login button
  Then A valid login message should appear "Logged In Successfully"

  Scenario: A user login should fail with incorrect credentials
  When User provides a valid username "incorrectUser"
  And User provides an incorrect password "BadPassword"
  And User clicks the login button
  Then A error message should appear "Your username is invalid!"
