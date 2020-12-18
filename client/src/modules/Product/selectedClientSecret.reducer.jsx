import { createReducer } from "@reduxjs/toolkit"

//---------------------------------
// actions
//---------------------------------

export const SET_SELECTED_CLIENT_SECRET = "[product] set selected client secret"
export const setSelectedClientSecret = (secret) => ({
  type: SET_SELECTED_CLIENT_SECRET,
  payload: { secret },
})

//---------------------------------
// reducers
//---------------------------------

const setSelectedClient = (state, { payload }) => {
  const { secret } = payload
  return secret
}

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = null

const reducer = createReducer(INITIAL_STATE, {
  [SET_SELECTED_CLIENT_SECRET]: setSelectedClient,
})

export default reducer
