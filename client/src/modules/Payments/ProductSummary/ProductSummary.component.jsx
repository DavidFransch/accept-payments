import React from "react"
import PropTypes from "prop-types"
import { isNil } from "ramda"
import logo from "./logo192.png"

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
      <h1 className="productLabel">{label}</h1>
      <div className="card">
        <div className="card-inner">
          <img src={logo} alt="" />
        </div>
      </div>
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
