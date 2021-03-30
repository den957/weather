import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Weather from "./Weather"

let container: any = null
beforeEach(() => {
   // create DOM Element
   container = document.createElement("div")
   document.body.appendChild(container)
})

afterEach(() => {
   // clear after finishing
   unmountComponentAtNode(container)
   container.remove()
   container = null
})

it("renders speed", () => {
   act(() => {
      render(<Weather speed={5} humidity={1} temp={1} feels_like={1} pressure={1} temp_min={1} temp_max={1} all={1} />, container)
   })
   expect(container.querySelector('.detailBody__speed > span').textContent).toBe("5")
   act(() => {
      render(<Weather speed={0} humidity={2} temp={1} feels_like={1} pressure={1} temp_min={1} temp_max={1} all={1} />, container)
   })
   expect(container.querySelector('.detailBody__humidity > span').textContent).toBe("2")
})