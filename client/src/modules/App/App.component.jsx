import React from "react"
import { Route } from "react-router-dom"
import { ConnectedRouter as Router } from "connected-react-router"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import history from "../../common/redux/history"
import "./App.css"
import { ProductList, ProductDetail, Status } from "../Product"
import Checkout from "../Checkout"
import { PROMISE_TEST_API } from "./constants"
import { Routes } from "../../common/routes"
const promise = loadStripe(PROMISE_TEST_API.KEY)

const Component = () => (
  <div className="App">
    <main>
      <Router history={history}>
        <Route exact path={Routes.PRODUCT_LIST}>
          <ProductList />
        </Route>
        <Route exact path={Routes.PRODUCT_DETAILS}>
          <ProductDetail />
        </Route>
        <Route exact path={Routes.CHECKOUT}>
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>
        <Route exact path={Routes.STATUS}>
          <Status />
        </Route>
      </Router>
    </main>
  </div>
)

export default Component
