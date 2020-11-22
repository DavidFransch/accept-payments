import { createReducer } from "@reduxjs/toolkit"

//---------------------------------
// actions
//---------------------------------

export const SET_SELECTED_PRODUCT = "[product] set selected product"
export const setSelectedProduct = (id) => ({
  type: SET_SELECTED_PRODUCT,
  payload: { id },
})

//---------------------------------
// reducers
//---------------------------------

const setSelected = (state, { payload }) => {
  const { id } = payload
  return parseInt(id, 10)
}

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = null

const reducer = createReducer(INITIAL_STATE, {
  [SET_SELECTED_PRODUCT]: setSelected,
})

export default reducer
