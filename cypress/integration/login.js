it ('login_test', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=uedmd4');
    cy.get(':nth-child(1) > .form-control').type('irko_birko@mail.com');
    cy.get(':nth-child(2) > .form-control').type('123qweqwe');
    cy.get('.btn').click();
    cy.get('.navbar').contains('irko_birko').should('exist');
});
