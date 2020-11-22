import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import { selectedProduct, products } from "../../modules/Payments/index"

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    selectedProduct,
    products,
  })
