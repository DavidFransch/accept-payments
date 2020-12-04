import React, { useState, useEffect } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import "./Checkout.css"

const Checkout = ({ onNavigateTo, productId, onBack }) => {
  // TODO: use with redux
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe()
  const elements = useElements()
  // TODO: do with redux effects
  useEffect(() => {
    if (productId) {
      window
        .fetch("/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: [{ id: productId }] }),
        })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setClientSecret(data.clientSecret)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }, [productId])

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  }

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
      onNavigateTo("/status")
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
