import React from "react"
import PropTypes from "prop-types"

import "./Product.css"

const Product = ({ productId, amount, onBack, onNavigateTo }) => {
  return (
    <div className="container">
      <h1 className="heading">Product Details</h1>
      <div className="content">
        <ul className="details">
          <li>
            <strong>Product ID:</strong> {productId}
          </li>
          <li>
            <strong>Amount:</strong>{" "}
            {(amount / 100).toLocaleString("en-us", {
              style: "currency",
              currency: "USD",
            })}
          </li>
        </ul>
        <footer>
          <button
            className="backButton"
            onClick={() => onBack("/")}
            type="button"
          >
            Back
          </button>
          <button
            className="checkoutButton"
            onClick={() => onNavigateTo("/checkout")}
            type="button"
          >
            Go to checkout
          </button>
        </footer>
      </div>
    </div>
  )
}

Product.propTypes = {
  onBack: PropTypes.func.isRequired,
  productId: PropTypes.number,
  amount: PropTypes.number,
  label: PropTypes.string,
}

Product.defaultProps = {
  productId: null,
  amount: null,
  label: "",
}

export default Product
