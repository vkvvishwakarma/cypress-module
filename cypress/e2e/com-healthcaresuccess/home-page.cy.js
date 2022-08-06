/// <reference types="cypress" />
describe("Home page validation and navigation ", ()=> {
    beforeEach(() => {
        cy.visit("/");
    })

    it("should verify the header link  ", () => {
        cy.get('#menu-top-navigation>li').should("be.visible").should("have.length", "6");
    })

    it("should select the brand option from service", () => {
        cy.get('[id^=menu-item]>[href$="/marketing-services"]').should("be.visible").click();
        cy.get('[href$="marketing-services/branding"]').first().should("be.visible").click();
        cy.location().should((loc) => {
            expect(loc.href).to.eq("https://healthcaresuccess.com/marketing-services/branding");
        })
    })
})
