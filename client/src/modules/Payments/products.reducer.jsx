import { createReducer } from "@reduxjs/toolkit"

//---------------------------------
// actions
//---------------------------------

export const NAVIGATE_TO = "[payments] navigate to checkout page"
export const navigateTo = (path) => ({
  type: NAVIGATE_TO,
  payload: path,
})

export const SELECT_PRODUCT = "[product] select"
export const selectProduct = (id) => ({ type: SELECT_PRODUCT, payload: { id } })

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = {
  1: { label: "PRODUCT 1", amount: 5000 },
  2: { label: "PRODUCT 2", amount: 10000 },
  3: { label: "PRODUCT 3", amount: 15000 },
}

const reducer = createReducer(INITIAL_STATE, {})

export default reducer
