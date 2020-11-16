const express = require("express")
const bodyParser = require("body-parser")

const app = express()
// const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// This is the real test secret API key.
const stripe = require("stripe")(
  "sk_test_51HbSZlHjgviKjH6joKQXoRzbG9Zb4AUBdn14FUOnbTZM3lyKqRqtrU6nh8RDwXfVpgQZnHne1I8KYBgYtdcJ95jD00stleuqGf"
)

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400
}

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
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

// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" })
// })

// app.post("/api/world", (req, res) => {
//   console.log(req.body)
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   )
// })
