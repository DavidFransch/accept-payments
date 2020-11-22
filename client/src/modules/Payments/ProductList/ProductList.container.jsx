import { connect } from "react-redux"
import { pipe, pick, evolve } from "ramda"

import { denormalize } from "../../../common/utils/data"
import { selectProduct, navigateTo } from "../products.reducer"
import ProductList from "./ProductList.component"

const mapStateToProps = pipe(
  pick(["products"]),
  evolve({
    products: denormalize("id"),
  })
)

const mapDispatchToProps = (dispatch) => ({
  onSelectProduct: (id) => dispatch(selectProduct(id)),
  onNavigateTo: (path) => dispatch(navigateTo(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
