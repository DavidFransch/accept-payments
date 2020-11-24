import { connect } from "react-redux"
import { path, prop } from "ramda"

import Checkout from "./Checkout.component"
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
  onNavigateTo: (path) => dispatch(navigateTo(path)),
  onBack: (path) => dispatch(navigateTo(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
