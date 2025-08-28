class ForgotPasswordPage {

  // Kunjungi halaman login
  static visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  }

  // Klik link "Forgot your password?"
  static clickForgotPassword() {
    cy.contains("Forgot your password?").click()
  }

  // Isi username, kalau kosong langsung clear aja
  static enterUsername(username) {
    const input = cy.get("input[placeholder='Username']").clear()
    if (username) {
      input.type(username)
    }
  }

  // Klik tombol Reset Password
  static clickResetPassword() {
    cy.get("button[type='submit']").click()
  }

  // Verifikasi jika reset password berhasil (halaman redirect)
  static verifyResetSuccess() {
    cy.url().should("include", "/auth/sendPasswordReset")
    cy.get("h6.oxd-text--h6")
      .should("contain.text", "Reset Password link sent successfully")
  }

}

export default ForgotPasswordPage