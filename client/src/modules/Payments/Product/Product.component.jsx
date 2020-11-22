import React from "react"
import PropTypes from "prop-types"

const Product = ({ productId, amount, label, onBack, onNavigateTo }) => {
  return (
    <div className="CounterDetail">
      <header className="CounterDetail__heading">Label{label}</header>
      <main className="CounterDetail__main">
        ProductId: {productId}
        Amount: {amount}
      </main>
      <footer>
        <button onClick={() => onBack("/")} type="button">
          Back
        </button>
        <button onClick={() => onNavigateTo("/checkout")} type="button">
          Go to checkout
        </button>
      </footer>
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
