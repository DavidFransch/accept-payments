import React from "react"
import { Route } from "react-router-dom"
import { ConnectedRouter as Router } from "connected-react-router"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import history from "../../common/redux/history"
import "./App.css"
import { ProductList, ProductDetail, Checkout, Status } from "../Payments"
import { PROMISE_TEST_API } from "./constants"
const promise = loadStripe(PROMISE_TEST_API.KEY)

const Component = () => (
  <div className="App">
    <main>
      <Router history={history}>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/product/:selectedProduct">
          <ProductDetail />
        </Route>
        <Route exact path="/checkout">
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>
        <Route exact path="/status">
          <Status />
        </Route>
      </Router>
    </main>
  </div>
)

export default Component
