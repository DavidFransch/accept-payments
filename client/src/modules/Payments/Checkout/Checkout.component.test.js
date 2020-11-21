import React from "react"
import { render } from "@testing-library/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
const promise = loadStripe(
  "pk_test_51HbSZlHjgviKjH6jbzZHNDU9fVoLcaYNkFhkCuHBFjQ2uH9hZfwDFCGh2b1Iv45o4XS5MMEr7lPGQwbKyJvymZqN00vT91EWMI"
)

import Checkout from "./Checkout.component"

describe("modules/Checkout/Checkout.component", () => {
  describe("render", () => {
    it("should render correctly", () => {
      render(
        <Elements stripe={promise}>
          <Checkout />
        </Elements>
      )
    })
  })
})
