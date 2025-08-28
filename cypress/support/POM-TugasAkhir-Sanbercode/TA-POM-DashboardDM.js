class DirectoryPage {
  
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
  }

  login(username, password) {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()
  }

  interceptDashboard() {
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").as("dashboard")
  }

  interceptLocations() {
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations").as("locations")
  }

  goToDirectoryMenu() {
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
  }

  searchByName(name, fullOption) {
    cy.get('.oxd-autocomplete-text-input > input').type(name)
    cy.contains('.oxd-autocomplete-option', fullOption).click()
    cy.get('.oxd-button--secondary').click()
  }

  searchByJobTitle(jobTitle) {
    cy.get('.oxd-form-row .oxd-select-text').eq(0).click()
    cy.contains('.oxd-select-option', jobTitle).click()
    cy.get('.oxd-button--secondary').click()
  }

  searchByLocation(location) {
    cy.get(':nth-child(3) > .oxd-input-group .oxd-select-text').click()
    cy.contains('.oxd-select-option', location).click()
    cy.get('.oxd-button--secondary').click()
  }

}

export default new DirectoryPage()