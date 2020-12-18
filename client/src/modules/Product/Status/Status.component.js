import React from "react"

import "./Status.css"

const Status = ({ onNavigateTo }) => {
  return (
    <div className="container">
      <h1>Payment Status</h1>
      <p className="content">
        {" "}
        Payment successful, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        <button className="button" onClick={() => onNavigateTo("/")}>
          Select another product
        </button>
      </p>
    </div>
  )
}

export default Status
