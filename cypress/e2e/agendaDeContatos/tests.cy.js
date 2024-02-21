/// <reference types="cypress" />

describe('testes agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('teste inclusao de contato', () => {
        const contato = 'Fernando'
        const email = 'teste@email.com'
        const tel = '123456789'
        cy.get('input[type="text"]').type(contato)
        cy.get('input[type="email"]').type(email)
        cy.get('input[type="tel"]').type(tel)

        cy.get('.adicionar').click()
    })

    it('teste editar contatos', () => {
        cy.get('.sc-gueYoa > .edit').first().click()

        const novoContato = 'SENSEI'
        const novoEmail = 'ninja@email.com'
        const novoTel = '000000000000'

        cy.wait(2000)

        cy.get('input[type="text"]').clear().type(novoContato)
        cy.get('input[type="email"]').clear().type(novoEmail)
        cy.get('input[type="tel"]').clear().type(novoTel)

        cy.get('.alterar').click()

    })
    it('teste button delete', () => {
        cy.get('.sc-gueYoa > .delete').first().click()
    })
})