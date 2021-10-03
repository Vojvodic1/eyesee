///  <reference types="cypress" />

describe('Eyesee Cypress Test', () =>{
    it('Goes to Assigned URL', () =>{
        cy.visit('https://trello.com/en/login')
    })

    it('Can not login',() =>{
        cy.get('.bottom-form-link > :nth-child(1) > .forgotLink')
        .click()

        cy.get('.form-field')
        .type('vaskevojvodic@gmail.com')

        cy.get('#submit')
        .click()

        cy.get('#bottom-form-return-link')
        .click()

    })   

    it('Login',() =>{
        cy.get('#user')
        .click()
        .type('vaskevojvodic@gmail.com')

        cy.get('#login')
        .click()
        .wait(3000)

        cy.get('#password')
        .click()
        .type('nikola12345')

        cy.get('#login-submit > .css-19r5em7')
        .click()
    })

    it('Sign up',() =>{
        cy.visit('https://trello.com/en/login')
        cy.get('.signupLink')
        .click()

        cy.get('#email')
        .click()
        .type('random@email123456789565.com')

        cy.get('#signup-submit')
        .click()

        cy.get('#displayName')
        .click()
        .type('RandomName')

        cy.get('#signup-submit > .css-19r5em7')
        .click()

        //don't know how to select correct images
    })
        
    // Cypress detected a cross origin error happened on page load:

    // it('Login with Google', () =>{
    //     cy.visit('https://trello.com/en/login')
    //     cy.get('#googleButton > .label')
    //     .click()

    //     cy.get('input[type="email"]')
    //     .type('vaskevojvodic@gmail.com')
    //     .get('#identifierNext button')
    //     .click()
    //     .wait(3000)
        

    //     cy.get('#google-auth-button > .css-19r5em7 > span')
    //     .click()
    // })

})