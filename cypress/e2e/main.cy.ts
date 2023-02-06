/// <reference types="cypress" />
describe("Cypress test for main.tsx", () => {
	beforeEach(() => cy.visit("/"));

	it("Exist Netlify Heading Element", () => {
		cy.get(`[data-cy=heading]`).should("have.text", "Hello Github");
	});
});
