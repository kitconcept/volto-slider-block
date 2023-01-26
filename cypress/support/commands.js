import '@testing-library/cypress/add-commands';
import '@plone/volto/cypress/support/commands';

Cypress.Commands.add('addNewBlock', (blockName, createNewSlate = false) => {
  let block;
  block = cy.getSlate(createNewSlate).type(`/${blockName}{enter}`);
  return block;
});
