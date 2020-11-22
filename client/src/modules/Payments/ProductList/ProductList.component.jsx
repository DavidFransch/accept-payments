import React from "react"
import PropTypes from "prop-types"
import { map, isEmpty } from "ramda"

import ProductSummary from "../ProductSummary/ProductSummary.component"

const ProductList = ({ onSelectProduct, products }) => {
  const emptyView = <div>...</div>

  const populatedView = (
    <ul>
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
    </ul>
  )

  return (
    <div className="ProductList">
      <header className="ProductList__heading">Product List</header>
      <main className="ProductList__main">
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
