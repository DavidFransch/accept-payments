import { connect } from "react-redux"
import { prop } from "ramda"

import Checkout from "./Checkout.component"
import { navigateTo } from "../Product/products.reducer"

const mapStateToProps = (state) => {
  const selectedProduct = prop("selectedProduct", state)
  const selectedClientSecret = prop("selectedClient", state)

  return {
    productId: selectedProduct,
    clientSecret: selectedClientSecret,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onNavigateTo: (path) => dispatch(navigateTo(path)),
  onBack: (path) => dispatch(navigateTo(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
