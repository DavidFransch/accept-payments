import { connect } from "react-redux"
import { path, prop } from "ramda"

import ProductDetail from "./ProductDetail.component"
import { navigateTo, getPaymentIntent } from "../products.reducer"

const mapStateToProps = (state) => {
  const selectedProduct = prop("selectedProduct", state)
  const amount = path(["products", selectedProduct, "amount"], state)
  return {
    productId: selectedProduct,
    amount,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onBack: (path) => dispatch(navigateTo(path)),
  onNavigateTo: (path) => dispatch(navigateTo(path)),
  onGetPaymentIntent: () => dispatch(getPaymentIntent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
