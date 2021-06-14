import { expect, fixture, html } from "@open-wc/testing"
import { MyElement } from "../src"
// Ensure to import like this too to account for side effects
// e.g. customElement decorator.
import "../src"

describe("MyElement", () => {
  let element: MyElement
  beforeEach(async () => {
    element = await fixture(html`<my-element></my-element>`)
  })

  it("renders an a tag", () => {
    const lnk = element.shadowRoot!.querySelector("a")!
    expect(lnk).to.exist
    expect(lnk.textContent).to.equal("Finding customers for your new business")
  })

  it("passes the a11y audit", async () => {
    expect(element).shadowDom.to.be.accessible()
  })
})
