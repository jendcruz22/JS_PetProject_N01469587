describe('Security Assignement 3', ()=>{
    // WHEN INITIALIZED THE PAGE SHOULD LOAD THE HOME PAGE.
    it('When initialized, the page should load the home page.', ()=>{
        cy.visit('/')
    })

    // CLICKING ON THE HOME BUTTON SHOULD LOAD THE HOME PAGE.
    it('Clicking on the home button should load the home page', ()=>{
        cy.get("#home").click()

    })

    // CLICKING ON THE LOGO SHOULD LOAD THE HOME PAGE.
    it('Clicking on the logo should load the home page.', ()=>{
        cy.get("#logo").click()
    })

    // CLICKING ON ABOUT COVID SHOULD REDIRECT THE USER TO THE CDC WEBSITE.
    // it('Clicking on "About COVID" should redirect the user to the CDC website.',()=>{
    //     cy.get('#aboutCovid').click()
    //     cy.location('https://www.cdc.gov/coronavirus/2019-ncov/your-health/about-covid-19.html')
    //     cy.go('back')
    // })

    // CLICKING ON GET HELP SHOULD REDIRECT THE USER TO THE CDC WEBSITE.
    // it('Clicking on "Get help" should redirect the user to the CDC website.', ()=>{
    //     cy.get('#getHelp').click()
    //     cy.location('https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html')
        
    // })

    // CLICKING ON ABOUT ME SHOULD REDIRECT THE USER TO JENNY'S PORTFOLIO WEBSITE.
    // it('Clicking on "About me" should redirect the user to Jennys portfolio website.', ()=>{
    //     cy.get('#aboutMe').click()
    //     cy.location('https://jennysresume.netlify.app/')
    // })

    describe("Test to pass", ()=>{
        // THE SEARCH BAR SHOULD ACCEPT A STRING AS THE INPUT.
        it('The search bar should accept a string as the input.', ()=>{
            cy.get('input[id="userInput"]').type("Cold").should('have.value',"Cold")
        })
        
        // THE SEARCH BUTTON SHOULD BE CLICKABLE.
        it('When the search button should be clickable', ()=>{
            cy.get('#searchButton').click()
        })

        // THE SYMPTOM'S VALUES SHOULD BE DISPLAYED FROM THE SYMPTOMS ARRAY
        it('The symptoms values should be displayed from the symptoms array', ()=>{
            cy.get('#yon').should('have.text', 'Cold'),
            cy.get('#sympDesc').should('have.text', 'Cold and COVID-19 have some similarities. Both develop as a result of a respiratory virus,  spreading from person to person through droplets that come from the nose and mouth. However, it is  important to remember that they are different. A person can develop COVID-19 as a result of contracting the SARS-CoV-2 virus, which is a type of  coronavirus. There are fourTrusted Source coronaviruses that most often cause the common cold in humans.  SARS-CoV-2, however, causes a different illness. Compared with colds, COVID-19: has a longerTrusted Source potential incubation periodcauses more varied symptoms has a higher risk of complications and fatality'),
            cy.get('#soi').should('have.text', 'Source of information: https://www.medicalnewstoday.com/articles/common-cold-vs-covid-19#are-they-similar')
        })

        // IF THE INPUT VALUE IS AN INCOMPLETE STRING THAT EXISTS IN THE SYMPTOMS ARRAY, THE OUTPUT SHOULD BE THE DATA OF THE FIRST SYMPTOM WHOSE SUBSTRING MATCHES THE INPUT VALUE
        it('If the input value is an incomplete string that exists in the symptoms array, the output should be the data of the first symptom whose substring matches the input value.', ()=>{
            cy.reload(),
            cy.get('input[id="userInput"]').type("Co").should('have.value',"Co"),
            cy.get('#searchButton').click()
            cy.get('#yon').should('have.text', 'Congestion or runny nose'),
            cy.get('#sympDesc').should('have.text', 'A runny nose can be a symptom of COVID-19. The Centers for Disease Control and Prevention (CDC) note that a runny nose can be a symptom of COVID-19 in both childrenTrusted Source and adultsTrusted Source.There are multiple variantsTrusted Source of SARS-CoV-2. According to the Washington State Department of Health, a runny nose is rarely a symptom of COVID-19 that is due to previous variants of the virus, but it can occur.However, according to recent evidence, a runny nose may be a main symptom of COVID-19 that results from the recently discovered delta variant.'),
            cy.get('#soi').should('have.text', 'Source of information: https://www.medicalnewstoday.com/articles/runny-nose-and-covid#is-it-a-symptom')
        })
    })

    describe("Test to fail", ()=>{
        // THE SEARCH BAR SHOULD ACCEPT AN EMPTY STRING AS INPUT.
        it('The search bar should accept empty string as input', ()=>{
            cy.get('input[id="userInput"]').invoke('val', '')
        })

        // WHEN THE SEARCH BUTTON IS CLICKED WITHOUT ANY TEXT IN THE SEARCH BAR, THE infoMsgDiv WILL BE VISIBLE 
        it('When the search button is clicked without any text in the search bar, the infoMsgDiv will be visible.',()=>{
            cy.get('#searchButton').click(),
            cy.get('#infoMsgDiv').should('have.css', 'display', 'block')
        })

        // AND THE OUTPUT TEXT "Please enter a valid symptom in the search bar above." SHOULD APPEAR IN RED.
        it('And the output text "Please enter a valid symptom in the search bar above." should appear in red.', ()=>{
            cy.get('#infoMsg').should('have.css', 'color', 'rgb(255, 0, 0)'),
            cy.get('#infoMsg').should('have.text',"Please enter a valid symptom in the search bar above.")
        })
    
        // THE SEARCH BAR SHOULD ACCEPT NUMBERS AS INPUT
        it('The search bar should accept numbers as input.', ()=>{
            cy.get('input[id="userInput"]').type(123).should('have.value', 123)
        })

        // WHEN THE SEARCH BUTTON IS CLICKED WITH NUMBERS IN THE SEARCH BAR AS INPUT, THE OUTPUT TEXT SHOULD BE DISPLAYED IN RED.
        it('When the search button is clicked with numbers in the search bar as input, the output text "Invalid input" should be displayed in red.', ()=>{
            cy.get('#searchButton').click(),
            cy.get('#infoMsg').should('have.css', 'color', 'rgb(255, 0, 0)'),
            cy.get('#infoMsg').should('have.text',"Invalid input")
        })

        // IF THE SYMPTOM DOES NOT EXIST IN OUR SYMPTOMS ARRAY, THE OUTPUT TEXT SHOULD DISPLAY "Symptom does not exist in our system. Contact 911 in case of emergency."
        it('If the symptom does not exist in our symptoms array, the output text should display "Symptom does not exist in our system. Contact 911 in case of emergency."', ()=>{
            cy.reload(),
            cy.get('input[id="userInput"]').type('abcd').should('have.value', 'abcd'),
            cy.get('#searchButton').click(),
            cy.get('#infoMsg').should('have.css', 'color', 'rgb(255, 0, 0)'),
            cy.get('#infoMsg').should('have.text',"Symptom does not exist in our system. Contact 911 in case of emergency.")
        })
    })
})