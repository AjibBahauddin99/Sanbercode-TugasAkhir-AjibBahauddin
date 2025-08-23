/// <reference types='cypress' />

describe('verifying variabels, cypress commands and jquery commands', () => {
    it('navigating to the spesific product pages', () => {
        cy.visit('https://automationteststore.com')
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        makeupLink.click()
        const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        skincareLink.click()
    });
});

