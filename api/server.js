require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const { createPaymentIntentHandler, webhookHandler } = require("./handlers")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/create-payment-intent", createPaymentIntentHandler)
app.post("/webhook", webhookHandler)

module.exports = app
