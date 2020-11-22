import React from "react"
import { render } from "@testing-library/react"
import ProductSummary from "./ProductSummary.component"

describe("modules/ProductSummary/ProductSummary.component", () => {
  describe("render", () => {
    const onSelectStub = jest.fn()
    const idStub = "1"
    const labelStub = "label"
    it("should render correctly", () => {
      render(
        <ProductSummary onSelect={onSelectStub} id={idStub} label={labelStub} />
      )
    })
  })
})
