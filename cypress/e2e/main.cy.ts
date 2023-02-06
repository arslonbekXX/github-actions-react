/// <reference types="cypress" />
describe("Cypress test for main.tsx", () => {
	beforeEach(() => cy.visit("/"));

	it("Exist Netlify Heading Element", () => {
		cy.get(`[data-cy=heading]`).should("have.text", "Hello Github");
		cy.get(`[data-cy=count]`).as("count").should("have.text", "Count 0");
		cy.get(`[data-cy=increment]`).as("incrementBtn").click();
		cy.get("@count").should("have.text", "Count 1");
		cy.get(`[data-cy=decrement]`).as("decrementBtn").click();
		cy.get("@count").should("have.text", "Count 0");
	});
});
