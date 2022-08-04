/// <reference types="cypress" />
describe("login page",()=>{

    it('should login with valid credential', function () {
        cy.visit("https://www.amazon.com/");
        cy.get('#nav-link-accountList > .nav-line-2').click();
        cy.get('#ap_email').should("be.enabled").should("be.focused").type("vkv.vinod@gmail.com");
        cy.get('.a-button-inner > #continue').should("be.visible").click();
        cy.get('#ap_password').type("Vin0d@123");
        cy.get('#signInSubmit').should("be.visible").click();
        //cy.get()// validate the targeted url
    });
})