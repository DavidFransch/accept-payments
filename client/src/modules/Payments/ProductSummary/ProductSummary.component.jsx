import React from "react"
import PropTypes from "prop-types"
import { isNil } from "ramda"

import "./ProductSummary.css"

const ProductSummary = ({ onSelect, id, label }) => {
  const emptyView = <div>...</div>

  const populatedView = (
    <li
      className="ProductSummary"
      key={id}
      role="listbox"
      tabIndex={-1}
      onClick={() => onSelect(id)}
      onKeyDown={() => onSelect(id)}
    >
      {label}
    </li>
  )

  return isNil(id) ? emptyView : populatedView
}

ProductSummary.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
}

ProductSummary.defaultProps = {
  id: null,
  label: "",
}

export default ProductSummary
