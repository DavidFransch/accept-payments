const { createPaymentIntentHandler } = require("./handlers")

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

describe("server", () => {
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

// TODO: add unit test for webhook
