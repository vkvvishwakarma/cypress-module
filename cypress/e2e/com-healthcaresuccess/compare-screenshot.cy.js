/// <reference types="cypress" />

describe(' compare the screen shot', () => {
    it('compare fullpage of healthcare', () => {
        cy.visit("/");
        cy.compareSnapshot('fixtures/healthcaresuccess-page.png',0.4);
    })

    // it('completes ', () => {
    //     cy.visit('/')
    //     cy.get('.ct-section-inner-wrap').type('write tests{enter}')
    //     cy.contains('', 'write tests').find('.toggle').check()
    //
    //     cy.contains('.', 'write tests').should('have.class', 'completed')
    //
    //     // run 'npm i cypress-plugin-snapshots -S'
    //     // capture the element screenshot and
    //     // compare to the baseline image
    //     cy.get('.todoapp').toMatchImageSnapshot({
    //         imageConfig: {
    //             threshold: 0.001,
    //         },
    //     })
    // })
})