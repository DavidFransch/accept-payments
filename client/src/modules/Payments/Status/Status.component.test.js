import React from "react"
import { render } from "@testing-library/react"
import Status from "./Status.component"

describe("modules/Status/Status.component", () => {
  describe("render", () => {
    it("should render correctly", () => {
      render(<Status />)
    })
  })
})
