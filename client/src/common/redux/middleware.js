import { push } from "connected-react-router"
import { LOCATION_CHANGE } from "connected-react-router/lib/actions"

import { navigateToCheckoutFlow } from "../../modules/Payments/payments.middleware"

export default [navigateToCheckoutFlow(push)]
