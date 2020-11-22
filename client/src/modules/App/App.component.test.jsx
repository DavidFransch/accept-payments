import React from "react"
import { render } from "@testing-library/react"
import App from "./App.component"
import { Provider } from "react-redux"

describe("modules/App/App.component", () => {
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
          <App />
        </Provider>
      )
    })
  })
})
