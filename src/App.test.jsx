import { mount } from '@cypress/react';
import App from './App';

describe('Note Manager', () => {
  it('should create, edit, and delete a note', () => {
    mount(<App />);

    cy.get('input[name="title"]').type('My Note');
    cy.get('input[name="rating"]').type('15');
    cy.get('textarea[name="comment"]').type('This is my note');
    cy.get('button[type="submit"]').click();

    cy.contains('My Note').click();
    cy.get('.edit-note-button').click();
    cy.get('input[name="title"]').clear().type('Updated Note');
    cy.get('button[type="submit"]').click();

    cy.contains('Updated Note').should('exist');

    cy.get('.delete-note-button').click();
    cy.get('.confirm-delete-button').click();

    cy.contains('Updated Note').should('not.exist');
  });

  // ... Autres tests fonctionnels ...
});
