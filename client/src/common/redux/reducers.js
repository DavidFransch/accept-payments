import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import {
  selectedProduct,
  products,
  selectedClient,
} from "../../modules/Product/index"

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    selectedProduct,
    products,
    selectedClient,
  })
