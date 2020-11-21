import React from "react"

const Product = ({ onNavigateTo }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={() => onNavigateTo("/checkout")}>
        Navigate To Checkout
      </button>
    </div>
  )
}

export default Product
