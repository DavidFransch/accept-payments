import React from "react"
import PropTypes from "prop-types"

import "./ProductDetail.css"
import { calcUSD } from "./utils"
import { Routes } from "../../../common/routes"

const Product = ({
  productId,
  amount,
  onBack,
  onNavigateTo,
  onGetPaymentIntent,
}) => {
  const handleCheckout = () => {
    onNavigateTo(Routes.CHECKOUT)
    onGetPaymentIntent()
  }

  return (
    <div className="container">
      <h1 className="heading">Product Details</h1>
      <div className="content">
        <ul className="details">
          <li>
            <strong>Product ID:</strong> {productId}
          </li>
          <li>
            <strong>Amount:</strong> {calcUSD(amount)}
          </li>
        </ul>
        <footer>
          <button
            className="backButton"
            onClick={() => onBack(Routes.PRODUCT_LIST)}
            type="button"
          >
            Back
          </button>
          <button
            className="checkoutButton"
            onClick={() => handleCheckout()}
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
