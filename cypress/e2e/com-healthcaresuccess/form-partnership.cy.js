/// <reference types="cypress" />

describe("form validation", ()=>{
    beforeEach(() => {
        cy.visit("/marketing-services/branding")
    })

    it("should validate form ",() => {
        //positive cases
        cy.wait(5000);

        cy.intercept("GET","https://forms.hubspot.com/collected-forms/v1/config/json?portalId*").as('getForms')
        cy.wait('@getForms').then((interception) => {
            cy.get('[id^="firstname-"]').clear().click().should("be.focused").type("vinod");
            cy.get('[id^="lastname-"]').clear().click().should("be.focused").type("vishwakarma");
            cy.get('[id^="company-"]').clear().click().should("be.focused").type("tradeling");
            cy.get('[id^="phone-"]').clear().click().should("be.focused").type("545246519");
            cy.get('[id^="email-"]').clear().click().should("be.focused").type("vkv.vinod@gmail.com");
            cy.get('[id^="website-"]').clear().click().should("be.focused").type("https://healthcaresuccess.com/")
            cy.get('[id^="message-"]').clear().click().should("be.focused").type("HCL hackathon");
            cy.get('.hs-button').should("be.enabled");
        });
       // cy.get('[name="firstname"]').click().clear().should("be.focused").type("Vinod");
       //  cy.get('[id^="firstname-"]').clear().click().should("be.focused").type("vinod");
       //  cy.get('[id^="lastname-"]').clear().click().should("be.focused").type("vishwakarma");
       //  cy.get('[id^="company-"]').clear().click().should("be.focused").type("tradeling");
       //  cy.get('[id^="phone-"]').clear().click().should("be.focused").type("545246519");
       //  cy.get('[id^="email-"]').clear().click().should("be.focused").type("vkv.vinod@gmail.com");
       //  cy.get('[id^="website-"]').clear().click().should("be.focused").type("https://healthcaresuccess.com/")
       //  cy.get('[id^="message-"]').clear().click().should("be.focused").type("HCL hackathon");
       //  cy.get('.hs-button').should("be.enabled");
    });

    //
    // it("Navigate validation",() => {
    //     cy.wait(1000);
    //     cy.get('[class^="input"]').first().click();
    //     cy.get('[id^="firstname-"]').clear().click()
    //     cy.get('[id^="lastname-"]').clear().click()
    //     cy.get('[id^="company-"]').clear().click()
    //     cy.get('[id^="phone-"]').clear().click()
    //     cy.get('[id^="email-"]').clear().click()
    //     cy.get('[id^="website-"]').clear().click()
    //     cy.get('[id^="message-"]').clear().click()
    //     cy.get('[class^="hs-error-msg"]').as('error');
    //     cy.get('@error').should("have.length",'7');
    //     cy.get('@error').first().should("contain","Please complete this required field.");
    // })
})