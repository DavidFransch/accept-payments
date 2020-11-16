import React from "react"

const Product = ({ onNavigateToCheckout }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={() => onNavigateToCheckout()}>
        Navigate To Checkout
      </button>
    </div>
  )
}

export default Product
