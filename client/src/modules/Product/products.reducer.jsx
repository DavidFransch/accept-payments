import { createReducer, createAction } from "@reduxjs/toolkit"

//---------------------------------
// actions
//---------------------------------

export const SELECT_PRODUCT = "[product] select"
export const selectProduct = (id) => ({ type: SELECT_PRODUCT, payload: { id } })

export const NAVIGATE_TO = "[product] navigate to checkout page"
export const navigateTo = (path) => ({
  type: NAVIGATE_TO,
  payload: path,
})

export const GET_PAYMENT_INTENT = "[product] get payment intent"
export const getPaymentIntent = createAction(GET_PAYMENT_INTENT)

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = {
  1: { label: "Product 1", amount: 5000 },
  2: { label: "Product 2", amount: 10000 },
  3: { label: "Product 3", amount: 15000 },
}

const reducer = createReducer(INITIAL_STATE, {})

export default reducer
