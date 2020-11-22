import React from "react"
import { render } from "@testing-library/react"
import Product from "./Product.container"
import { Provider } from "react-redux"

describe("modules/Product/Product.component", () => {
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
          <Product />
        </Provider>
      )
    })
  })
})
