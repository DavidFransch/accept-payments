import { push } from "connected-react-router"
import { LOCATION_CHANGE } from "connected-react-router/lib/actions"

import {
  selectProductFlow,
  setSelectedProductFlow,
  navigateToFlow,
  getPaymentIntentOnNavFlow,
  getPaymentIntentFlow,
} from "../../modules/Product/products.middleware"

export default [
  selectProductFlow(push),
  navigateToFlow(push),
  setSelectedProductFlow({ LOCATION_CHANGE }),
  getPaymentIntentOnNavFlow(),
  getPaymentIntentFlow(),
]
