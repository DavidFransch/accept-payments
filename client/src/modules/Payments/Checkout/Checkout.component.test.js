import React from "react"
import { render } from "@testing-library/react"
import Checkout from "./Checkout.component"

describe("modules/Checkout/Checkout.component", () => {
  describe("render", () => {
    it("should render correctly", () => {
      render(<Checkout />)
    })
  })
})
