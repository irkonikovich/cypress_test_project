let user;

describe('Your Second Test', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
      cy.visit('https://react-redux.realworld.io/#/register?_k=hclnjg');
      
      cy.get(':nth-child(1) > .form-control').type(user.username);
      cy.get(':nth-child(2) > .form-control').type(user.email);
      cy.get(':nth-child(3) > .form-control').type(`123qweqwe`);
      cy.get('.btn').click();
      cy.get('.navbar').contains(user.username).should('exist');
    });
  });


