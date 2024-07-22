Feature: Test the demo app functionality

  Scenario: Test the login functionality
    Given user is on the homepage
    When user clicks the login button
    Then user is redirected to the login page

  Scenario: User tries to login
    Given user is on the login page
    When user types username <username> and password <password>
    Then user gets the notification <notification>

    Examples:
      | username | password | notification       |
      |  12@2.nl | 12345678 | You are logged in! |

  Scenario: User tries to sign up
    Given user is on the sign up page
    When user enters <email> and <pass>
    Then user clicks sign up
    Then user gets the notif <notif>

    Examples:
      | email         | pass       | notif                            |
      | hello@p10.com | 1234567890 | You have successfully signed up! |
