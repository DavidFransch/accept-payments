import React from "react"
import { render } from "@testing-library/react"
import ProductDetail from "./Product.container"
import { Provider } from "react-redux"

describe("modules/ProductDetail/ProductDetail.component", () => {
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
          <ProductDetail />
        </Provider>
      )
    })
  })
})
