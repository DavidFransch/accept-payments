const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// This is the real test secret API key.
const stripe = require("stripe")(
  "sk_test_51HbSZlHjgviKjH6joKQXoRzbG9Zb4AUBdn14FUOnbTZM3lyKqRqtrU6nh8RDwXfVpgQZnHne1I8KYBgYtdcJ95jD00stleuqGf"
)

const calculateOrderAmount = (items) => {
  if (items === null) {
    return
  }
  switch (items[0].id) {
    case 1:
      return 5000
      break
    case 2:
      return 10000
      break
    case 3:
      return 15000
  }
}

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  })
  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

module.exports = app
