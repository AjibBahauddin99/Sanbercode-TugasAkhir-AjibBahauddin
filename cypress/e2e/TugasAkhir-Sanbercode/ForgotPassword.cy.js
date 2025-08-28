import ForgotPasswordPage from '../../support/POM-TugasAkhir-Sanbercode/TA-POM-ForgotPass'

describe("Testing Website OrangeHRM - Fitur Forgot Your Password - POM and Intercept", () => {

  it("FORGOT_001 - Successfully request password reset with valid username", () => {
    ForgotPasswordPage.visit()

    cy.intercept("POST", "**/auth/**").as("resetPassword")

    ForgotPasswordPage.clickForgotPassword()
    ForgotPasswordPage.enterUsername("Admin")
    ForgotPasswordPage.clickResetPassword()

    cy.wait("@resetPassword").then((intercept) => {
      expect([200, 302]).to.include(intercept.response.statusCode)
    })

    ForgotPasswordPage.verifyResetSuccess()
  })

  it("FORGOT_002 - Failed request when username field is empty", () => {
    ForgotPasswordPage.visit()
    ForgotPasswordPage.clickForgotPassword()
    ForgotPasswordPage.enterUsername("") 
    ForgotPasswordPage.clickResetPassword()

    cy.get("span.oxd-input-field-error-message")
      .should("contain.text", "Required")
  })

})