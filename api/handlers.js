const { SECRET_TEST_API } = require("./constants")
const stripe = require("stripe")(SECRET_TEST_API.KEY)
const { calculateOrderAmount } = require("./data")

const createPaymentIntentHandler = async (req, res) => {
  const { items } = req.body
  if (!items) {
    return Promise.req.error
  }

  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: calculateOrderAmount[items[0].id],
      currency: "usd",
    })
    .catch((e) => {
      console.error(e)
    })
  if (paymentIntent) {
    res.send({
      clientSecret: paymentIntent.client_secret,
    })
  }
}

module.exports.createPaymentIntentHandler = createPaymentIntentHandler

const webhookHandler = (req, res) => {
  let event
  try {
    event = req.body
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object
      console.log("PaymentIntent was successful!")
      break
    case "charge.succeeded":
      const paymentMethod = event.data.object
      console.log("The charge has been succesful!")
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }
  res.json({ received: true })
}

module.exports.webhookHandler = webhookHandler
