describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="todo-input"]').type("Todo 01 ");
    cy.get('[data-testid="todo-add"]').click()
    cy.get('table tbody').contains('tr', 'Todo 01').should('exist')
  })
})