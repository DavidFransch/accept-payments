//---------------------------------
// actions
//---------------------------------

export const NAVIGATE_TO = "[payments] navigate to checkout page"
export const navigateTo = (path) => ({
  type: NAVIGATE_TO,
  payload: path,
})
