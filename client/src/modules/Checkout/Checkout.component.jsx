import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import "./Checkout.css"
import { Routes } from "../../common/routes"
import { cardStyle } from "./constants"

const Checkout = ({ onNavigateTo, productId, onBack, clientSecret }) => {
  // TODO: Move into middleware for success and fail flow
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const stripe = useStripe()
  const elements = useElements()

  const handleChange = async (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      onNavigateTo(Routes.STATUS)
    }
  }

  return (
    <div className="checkoutContainer">
      <form className="form" id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="button"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {error && (
          <div>
            <div className="card-error" role="alert">
              {error}
            </div>
            <button
              className="backButton"
              onClick={() => onBack(`/product/${productId}`)}
              type="button"
            >
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Checkout
