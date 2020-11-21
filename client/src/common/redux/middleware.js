import { push } from "connected-react-router"

import { navigateToFlow } from "../../modules/Payments/payments.middleware"

export default [navigateToFlow(push)]
