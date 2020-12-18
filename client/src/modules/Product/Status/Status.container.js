import { connect } from "react-redux"

import Status from "./Status.component"
import { navigateTo } from "../products.reducer"

const mapDispatchToProps = (dispatch) => ({
  onNavigateTo: (path) => dispatch(navigateTo(path)),
})

export default connect(null, mapDispatchToProps)(Status)
