import { connect } from "react-redux"

import Component from "./Product.component"
import { navigateTo } from "../payments.reducer"

const mapDispatchToProps = (dispatch) => ({
  onNavigateTo: (path) => dispatch(navigateTo(path)),
})

export default connect(null, mapDispatchToProps)(Component)
