describe("Authenticated user checkout program (user already logged in)", () => {
    it("Visit Home Page", () => {
        cy.viewport(1440, 1024);
        cy.visit("https://web-staging.rakamin.com");

        cy.contains('Login').click();

        //Form Login User
        //input email 
        const email = cy.get("input[name='email']");
        email.type("sukam@gmail.com");
        email.should("be.visible");
        email.should("have.attr", "type", "text");
        //input password
        const password = cy.get("input[name='password']");
        password.type("sukam12345");
        email.should("be.visible");
        email.should("have.attr", "type", "password");
        //click button submit
        const button = cy.get("[data-cy='login-submit-button']");
        button.click();
        button.should("be.visible");
        button.should("have.attr", "type", "submit");

        //Navigation Bar
        //click navigation bar Virtual Intership
        cy.contains('Virtual Internship').click();
        cy.should("be.visible")
        //click Explore VIX Program
        cy.get("[data-cy='explore-vix-navigation']").eq(1).click({force : true});
        
        //click confirmation
        cy.get("[data-cy='confirmation-resume-filling-button']").click();

        //  //choice program virtial intership 
        cy.get("[data-cy='vix-card-1']").click();
        //  //click button login daftar sekarang
        cy.get("[data-cy='register-vix-button']").click();

        //Form application
        //input namee
        const name = cy.get("input[name='name']");
        name.type(" sukamto");
        name.should("be.visible");
        name.should("have.attr", "type", "text");

        //input no.whatshapp
        const number = cy.get("input[name='phone_number']");
        number.type("6285641496706");
        number.should("be.visible");
        number.should("have.attr", "type", "number");

        //input link linkedin
        const linkedin = cy.get("input[name='linkedin_url']");
        linkedin.type("https://www.linkedin.com/in/aris-sukamto-8b7092208/");
        linkedin.should("be.visible");
        linkedin.should("have.attr", "type", "text");

        //upload berkas CV
        cy.get("[type='file']").selectFile('cypress/file/CV.pdf',{force : true})
        .should("have.attr", "type", "file");
        //choice checkbox
        cy.get("[data-cy='vix-info-source-option-1']").click();
        //click checkbox agrement
        cy.get("[data-cy='agreement-checkbox']").click();
        // //click button submit
        // cy.get("[data-cy='vix-form-submit-button']").click();

        // //click continue 
        // cy.get("[data-cy='button-confirm']").click();
      
        // //Payment
        // //click checkbox vip access 
        // cy.get("[data-cy='vip-access-checkbox']").click();
        // //continue payment
        // cy.get("[data-cy='continue-to-payment-button']").click();
        // //continue payment
        // cy.get("[data-cy='thank-you-page-action-button']").click();
    });
});