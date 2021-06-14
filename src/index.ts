import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { tailwind } from "./shared"

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = [tailwind]
  render() {
    return html`
      <div
        class="mx-auto max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-white relative"
      >
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/img/store.jpeg"
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >Finding customers for your new business</a
            >
            <p class="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here are five ideas you
              can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    `
  }
}

// Inject tailwind into the head so that the base styles are applied to
// html + body
var head = document.head
var style = document.createElement("style")
style.textContent = tailwind.toString()
head.appendChild(style)
