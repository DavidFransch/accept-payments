import React from "react"

const Status = ({ onNavigateTo }) => {
  return (
    <div>
      <h1>Status Page</h1>
      {/* Show a success message upon completion */}
      <p>
        {" "}
        {/* className={succeeded ? "result-message" : "result-message hidden"}*/}
        Payment successful, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        <button onClick={() => onNavigateTo("/")}>
          Select another product
        </button>
      </p>
    </div>
  )
}

export default Status
