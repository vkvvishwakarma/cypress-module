describe("",()=>{

    beforeEach(()=>{
        cy.visit("/about/testimonials")
    })
    it("write all the testimonial text to txt file",()=>{
        var testimonialText = [];

        cy.get('.ct-slide').each(($testimonialText)=>{
           var textTestimonialAndName =''
           cy.wrap($testimonialText).find('.testimonial-slide-text').each(($text)=>{
               testimonialText.push($text.text())
           })
            // cy.wrap($testimonialText).find('.ct-text-block').first().each(($textTestimonialName)=>{
            //     textTestimonialAndName =  $textTestimonialName.text();
            // })
            //testimonialText.push(textTestimonialAndName);
        })
        console.log(testimonialText);

        cy.writeFile("cypress/fixtures/testimonial.txt", testimonialText)

    })
})