import sinon from "sinon"

import { selectProduct, navigateTo } from "./products.reducer"
import { setSelectedProduct } from "./selectedProduct.reducer"
import * as SUT from "./products.middleware"

describe("modules/Product/selectProduct.middleware", () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe("navigateToFlow", () => {
    it("should navigate back to the product list", () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const navigateStub = sandbox.stub()

      // when ... a product gets selected
      const action = navigateTo()
      const middleware = SUT.navigateToFlow(navigateStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, navigateStub("/"))
    })
  })

  describe("selectedProductFlow", () => {
    it("should select a product", () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const navigateStub = sandbox.stub()

      // when ... we select a product
      const id = "1"
      const action = selectProduct(id)
      const middleware = SUT.selectProductFlow(navigateStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(
        dispatchStub,
        navigateStub(`/product/${id}`)
      )
      sinon.assert.calledWithExactly(dispatchStub, setSelectedProduct(id))
    })
  })

  describe("setSelectedProductFlow", () => {
    it("should set selected product on initial page load", () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a product gets selected
      const payload = {
        location: {
          pathname: "/product/1",
        },
        isFirstRendering: true,
      }
      const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedProductFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, setSelectedProduct("1"))
    })

    it("should not set selected product on subsequent page load", () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a product page is loaded
      const payload = {
        location: {
          pathname: "/product/1",
        },
        isFirstRendering: false,
      }
      const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedProductFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.notCalled(dispatchStub)
    })

    it("should not set selected product on when not a single product page", () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a product gets selected
      const payload = {
        location: {
          pathname: "/NOTproduct/1",
        },
        isFirstRendering: false,
      }
      const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedProductFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.notCalled(dispatchStub)
    })
  })
})
