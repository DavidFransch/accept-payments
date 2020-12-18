import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import Status from "./Status.container"

describe("modules/Status/Status.component", () => {
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
          <Status />
        </Provider>
      )
    })
  })
})
