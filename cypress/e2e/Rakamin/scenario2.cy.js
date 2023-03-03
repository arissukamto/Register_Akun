describe("Unauthenticated user checkout program", () => {
    it ("Visit Detail Page", () => {
        cy.viewport(1440, 1024);
        cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore");
        cy.wait(4000);

        // choice program virtial intership 
        cy.get("[data-cy='vix-card-1']").click();

        // click button login daftar sekarang
        cy.get("[data-cy='register-vix-button']").click();

        // click button login case user not login
        cy.get("[data-cy='login-first-button']").click();

        // Form Login User
        // input email 
        const email = cy.get("input[name='email']");
        email.type("aris123@gmail.com");
        // input password
        const password = cy.get("input[name='password']");
        password.type("aris12345");
        // click button submit
        const button = cy.get("[data-cy='login-submit-button']");
        button.click();

        // click button daftar sekarang
        cy.get("[data-cy='register-vix-button']").click();

        // Form application
        // input namee
        const name = cy.get("input[name='name']");
        name.type("Aris Sukamto");
        // input no.whatshapp
        const number = cy.get("input[name='phone_number']");
        number.type("6285641496706");
        // input link linkedin
        const linkedin = cy.get("input[name='linkedin_url']");
        linkedin.type("https://www.linkedin.com/in/aris-sukamto-8b7092208/");
        // upload berkas CV
        cy.get("[type='file']").selectFile('cypress/file/CV.pdf',{force : true});
        // choice checkbox
        cy.get("[data-cy='vix-info-source-option-1']").click();
        // click checkbox agrement
        cy.get("[data-cy='agreement-checkbox']").click();
        //click button submit
        cy.get("[data-cy='vix-form-submit-button']").click();
     

        //click continue 
        cy.get("[data-cy='button-confirm']").click();

        //click checkbox vip access 
        cy.get("[data-cy='vip-access-checkbox']").click();

        //continue payment
        cy.get("[data-cy='continue-to-payment-button']").click();

        //continue payment
        cy.get("[data-cy='thank-you-page-action-button']").click();





    });

   
        
    

  

   

    
   
    
    

    // it ("Navigation Bar", () => {

        
        
    //     // button.click();
    // //     const email = cy.get("input[name='email']");
    // //     email.type("aris123@gmail.com")

    // //     const password = cy.get("input[name='password']");
    // //     password.type("aris12345")

    // //     const button = cy.get("[data-cy='login-submit-button']");
    // //     button.click();
    // });
   

});