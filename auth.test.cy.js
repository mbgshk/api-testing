/// <reference types="cypress" />

// describe('Basic Auth', () => {
//     it('Successfully login by appending username and password in URL', () => {
//         cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
//         cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
//     });

//     // Use Token
//     it('Successfully login using headers', () => {
//         cy.visit("https://the-internet.herokuapp.com/basic_auth", {
//             headers: {
//                 authorization: 'Basic YWRtaW46YWRtaW4='
//             },
//             failOnStatusCode: false
//         })
//         cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
//     });
// })

// Tugas
describe('Basic Auth Costum Commands', () => {
    it('Successfully login using custom commands', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.loginViaAPI('email', 'password')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
})