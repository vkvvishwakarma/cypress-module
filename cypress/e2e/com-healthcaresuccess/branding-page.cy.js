/// <reference types="cypress" />
describe('Write the text from branding tab', function () {
    beforeEach(() => {
        cy.visit('/marketing-services/branding');
    })

    it("should capture the text from branding page write it on console", () => {
        var headerText = []
        cy.get('[id^="headline"]').each(($getText) => {
            console.log($getText.text());
            headerText.push($getText.text());
        })
        var subTxt = [];
        cy.get('[id^="text_block"]').each(($subtext) => {
            subTxt.push($subtext.text());
        })
        cy.writeFile("cypress/fixtures/write-text.txt", subTxt)
    })


});
