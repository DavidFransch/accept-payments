const app = require("./server")
const supertest = require("supertest")
const request = supertest(app)

describe("/api/server", () => {
  describe("/endpoints", () => {
    describe("stripe-create-payment-intent", () => {
      it("creates a payment intent which returns a valid client secret", async () => {
        // when ... we initiate a payment intent with a valid id
        const { status, body } = await request
          .post("/create-payment-intent")
          .send({
            items: [{ id: 1 }],
          })
        // then ... status response should be valid
        expect(status).toBe(200)
        // then ... body object should contain the client-seceret
        expect(body).toMatchObject({
          clientSecret: expect.stringMatching(/^pi(\w+)/),
        })
      })
    })
    describe("stripe-webhook", () => {
      it("returns a valid response from stripe", async () => {
        // when ... we call the webhook endpoint with a webhook event
        const response = await request.post("/webhook").send({
          type: "payment_intent.created",
        })
        // then ... the status response should be valid
        expect(response.status).toBe(200)
      })
    })
  })
})
