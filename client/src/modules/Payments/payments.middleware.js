import { NAVIGATE_TO_CHECKOUT } from "./payments.reducer"
//---------------------------------
// navigate to checkout
//---------------------------------

export const navigateToCheckoutFlow = (navigate) => ({ dispatch }) => (
  next
) => (action) => {
  next(action)

  const { type } = action
  if (type === NAVIGATE_TO_CHECKOUT) {
    dispatch(navigate("/checkout"))
  }
}
