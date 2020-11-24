const app = require("./server") // Link to your server file
const supertest = require("supertest")
const request = supertest(app)

describe("./server", () => {
  describe("endpoint", () => {
    it("creates a payment intent", async (done) => {
      const response = await request.post("/create-payment-intent").send({
        items: [{ id: 1 }],
      })

      expect(response.status).toBe(200)
      const tag = response.body.clientSecret.slice(0, 2)
      expect(tag).toBe("pi")
      done()
    })
  })
  describe("endpoint", () => {
    it("returns a webhook response", async (done) => {
      const response = await request.post("/webhook")
      expect(response.status).toBe(200)
      done()
    })
  })
})
