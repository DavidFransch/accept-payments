import { connect } from "react-redux"
import { path, prop } from "ramda"

import ProductDetail from "./ProductDetail.component"
import { navigateTo } from "../products.reducer"

const mapStateToProps = (state) => {
  const selectedProduct = prop("selectedProduct", state)
  const amount = path(["products", selectedProduct, "amount"], state)
  const label = path(["products", selectedProduct, "label"], state)
  return {
    productId: selectedProduct,
    amount,
    label,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onBack: (path) => dispatch(navigateTo(path)),
  onNavigateTo: (path) => dispatch(navigateTo(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
