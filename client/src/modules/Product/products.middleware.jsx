import { prop, path, includes } from "ramda"

import {
  NAVIGATE_TO,
  SELECT_PRODUCT,
  getPaymentIntent,
  GET_PAYMENT_INTENT,
} from "./products.reducer"
import { setSelectedProduct } from "./selectedProduct.reducer"
import { setSelectedClientSecret } from "./selectedClientSecret.reducer"
import { getLastParamFromRouterState } from "../../common/redux/router.utils"
import { Routes } from "../../common/routes"

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
// get payment intent on navigate to checkout
//---------------------------------

export const getPaymentIntentOnNavFlow = (HTTP) => ({ dispatch, getState }) => (
  next
) => (action) => {
  next(action)
  const { type } = action
  const param = getState().router.location.pathname
  if (type === NAVIGATE_TO && param === Routes.CHECKOUT) {
    dispatch(getPaymentIntent())
  }
}

//---------------------
// get payment intent
//---------------------

export const getPaymentIntentFlow = (HTTP) => ({ getState, dispatch }) => (
  next
) => (action) => {
  next(action)
  const { type } = action
  const state = getState()

  if (type === GET_PAYMENT_INTENT) {
    if (state.selectedProduct) {
      fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: state.selectedProduct }] }),
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          dispatch(setSelectedClientSecret(data.clientSecret))
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }
}
