/// <reference types="cypress" />

describe('Create New User', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Muhammad Bagus Ishak',
            "job": 'QA Engineer'
        }
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
        cy.request('POST', 'https:reqres.in/api/users', user).then((respone) => {
            expect(respone.body).to.have.property('name', 'Muhammad Bagus Ishak')
        })
        cy.request('POST', 'https:reqres.in/api/users', user).then((respone) => {
            expect(respone.body).to.have.property('job', 'QA Engineer')
        })
    });
});