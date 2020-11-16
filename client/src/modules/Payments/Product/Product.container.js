import { connect } from "react-redux"

import Component from "./Product.component"
import { navigateToCheckout } from "../payments.reducer"

const mapDispatchToProps = (dispatch) => ({
  onNavigateToCheckout: () => dispatch(navigateToCheckout()),
})

export default connect(null, mapDispatchToProps)(Component)
