import { NAVIGATE_TO } from "./payments.reducer"
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
