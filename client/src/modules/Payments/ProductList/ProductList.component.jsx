import React from "react"
import PropTypes from "prop-types"
import { map, isEmpty } from "ramda"

import ProductSummary from "../ProductSummary/ProductSummary.component"
import "./ProductList.css"

const ProductList = ({ onSelectProduct, products }) => {
  const emptyView = <div>...</div>

  const populatedView = (
    <ul>
      <section className="cards">
        {map(
          ({ id, label }) => (
            <ProductSummary
              key={id}
              id={id}
              label={label}
              onSelect={onSelectProduct}
            />
          ),
          products
        )}
      </section>
    </ul>
  )

  return (
    <div className="container">
      <h1 className="heading">Product List</h1>
      <main className="mainContent">
        {isEmpty(products) ? emptyView : populatedView}
      </main>
    </div>
  )
}

ProductList.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

ProductList.defaultProps = {
  products: [],
}

export default ProductList
