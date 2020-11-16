import React from "react"
import { render } from "@testing-library/react"
import Product from "./Product.component"

describe("modules/Product/Product.component", () => {
  describe("render", () => {
    it("should render correctly", () => {
      render(<Product />)
    })
  })
})
