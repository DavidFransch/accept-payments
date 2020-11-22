import * as SUT from "./router.utils"

describe("common/redux/router.utils", () => {
  describe("getLastParamFromRouterState", () => {
    it("should get the last param from product state", () => {
      // when ... we want to extract that id
      // then ... it should extract as expected

      const payload = {
        location: {
          pathname: "/product/PRODUCTID",
        },
      }

      const result = SUT.getLastParamFromRouterState(payload)
      expect(result).toEqual("PRODUCTID")
    })
  })
})
