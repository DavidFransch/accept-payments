import { prop, path, includes } from "ramda"
import { NAVIGATE_TO, SELECT_PRODUCT } from "./products.reducer"
import { setSelectedProduct } from "./selectedProduct.reducer"
import { getLastParamFromRouterState } from "../../common/redux/router.utils"

//---------------------------------
// navigate to checkout
//---------------------------------

export const navigateToFlow = (navigate) => ({ dispatch }) => (next) => (
  action
) => {
  next(action)

  const { type, payload } = action
  if (type === NAVIGATE_TO) {
    dispatch(navigate(payload))
  }
}

//---------------------------------
// select product
//---------------------------------

export const selectProductFlow = (navigate) => ({ dispatch }) => (next) => (
  action
) => {
  next(action)

  const { type, payload } = action
  if (type === SELECT_PRODUCT) {
    const id = prop("id", payload)
    dispatch(setSelectedProduct(id))
    dispatch(navigate(`/product/${id}`))
  }
}

//---------------------------------
// set selected product
//---------------------------------

export const setSelectedProductFlow = ({ LOCATION_CHANGE }) => ({
  dispatch,
}) => (next) => (action) => {
  next(action)

  const { type, payload } = action

  if (
    type === LOCATION_CHANGE &&
    prop("isFirstRendering", payload) &&
    includes("/product/", path(["location", "pathname"], payload))
  ) {
    const id = getLastParamFromRouterState(payload)
    dispatch(setSelectedProduct(id))
  }
}
