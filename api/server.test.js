const { createPaymentIntentHandler, webhookHandler } = require("./handlers")

jest.mock("stripe", () => {
  return jest.fn().mockImplementation(() => {
    return {
      paymentIntents: {
        create: jest.fn().mockResolvedValue({
          client_secret: "PI1234567890",
        }),
      },
    }
  })
})

describe("api/server", () => {
  describe("create payment intent handler", () => {
    it("should return a payment intent response", async () => {
      // given ... items
      const req = {
        body: {
          items: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
      }
      const sendStub = jest.fn()
      const res = {
        send: sendStub,
      }
      // when ... a payment intent is initiated
      await createPaymentIntentHandler(req, res)
      // then ... should return the client secret
      expect(sendStub).toHaveBeenCalledWith({
        clientSecret: "PI1234567890",
      })
    })
  })
  describe("webhook handler", () => {
    it("should return a webhook response", async () => {
      // given ... an event type
      const req = {
        body: {
          type: "payment_intent.created",
        },
      }

      const sendStub = jest.fn()
      const res = {
        send: sendStub,
      }
      // when ... a webhook is initiated
      await webhookHandler(req, res)
      // then ... should return received true
      expect(sendStub).toHaveBeenCalledWith({
        received: true,
      })
    })
  })
})
