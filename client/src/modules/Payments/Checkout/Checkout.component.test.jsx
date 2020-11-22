import React from "react"
import { render } from "@testing-library/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Provider } from "react-redux"
const promise = loadStripe(
  "pk_test_51HbSZlHjgviKjH6jbzZHNDU9fVoLcaYNkFhkCuHBFjQ2uH9hZfwDFCGh2b1Iv45o4XS5MMEr7lPGQwbKyJvymZqN00vT91EWMI"
)

import Checkout from "./Checkout.container"

describe("modules/Checkout/Checkout.component", () => {
  describe("render", () => {
    it("should render correctly", () => {
      const unsubscribeStub = jest.fn()
      const subscribeStub = jest.fn().mockReturnValue(unsubscribeStub)
      const dispatchStub = jest.fn()
      const getStateStub = jest.fn().mockReturnValue({})
      const storeStub = {
        subscribe: subscribeStub,
        dispatch: dispatchStub,
        getState: getStateStub,
      }
      render(
        <Provider store={storeStub}>
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Provider>
      )
    })
  })
})
