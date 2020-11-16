const app = require("./server") // Link to your server file
const supertest = require("supertest")
const request = supertest(app)

describe("./server", () => {
  describe("endpoint", () => {
    it("creates a payment intent", async (done) => {
      const response = await request.post("/create-payment-intent").send({
        items: [{ id: "xl-tshirt" }],
      })

      expect(response.status).toBe(200)
      const tag = response.body.clientSecret.slice(0, 2)
      expect(tag).toBe("pi")
      done()
    })
  })
})
