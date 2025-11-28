import Heading from "../Heading.vue";

describe("Heading.cy.js", () => {
  it("should render correct text", () => {
    cy.mount(Heading, {
      slots: {
        default: "Hello there!",
      },
    });
    cy.get("h1").should("have.text", "Hello there!");
  });
});
