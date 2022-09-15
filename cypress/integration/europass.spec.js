/// <reference types="cypress" />

import { ELEMENTS } from "../support/Elements/Objects"

describe("form", () => {
  it("add skill", () => {
    cy.visit(ELEMENTS.URL)
    cy.wait(10000)
    cy.get(ELEMENTS.LOGIN).click()
    cy.wait(10000)
    cy.get(ELEMENTS.USERNAME).type(ELEMENTS.USER)
    cy.wait(500)
    cy.get(ELEMENTS.BTN_NEXT).click()
    cy.wait(10000)
    cy.get(ELEMENTS.PASSWORD).type(ELEMENTS.PASS)
    cy.wait(500)
    cy.get(ELEMENTS.BTN_ENTRAR).click()
    cy.wait(30000)
    cy.get(ELEMENTS.BTN_COOKIES).click()
    cy.wait(10000)
    cy.get(ELEMENTS.BTN_PROFILE).click()
    cy.wait(10000)
    cy.get(ELEMENTS.BTN_EDIT_SKILLS).click()
    cy.wait(10000)
    cy.get(ELEMENTS.INPUT_SKILL).focus()
    ELEMENTS.SKILLS.map((skill) => {
      cy.get(ELEMENTS.INPUT_SKILL).type(skill)
      cy.get(ELEMENTS.BTN_ADD_SKILL).click()
    })
    cy.get(ELEMENTS.BTN_SAVE).click()
  })
})
