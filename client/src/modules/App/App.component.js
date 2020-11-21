import React from "react"
import { Route } from "react-router-dom"
import { ConnectedRouter as Router } from "connected-react-router"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import history from "../../common/redux/history"
import "./App.css"
import { Product, Checkout, Status } from "../Payments"
const promise = loadStripe(
  "pk_test_51HbSZlHjgviKjH6jbzZHNDU9fVoLcaYNkFhkCuHBFjQ2uH9hZfwDFCGh2b1Iv45o4XS5MMEr7lPGQwbKyJvymZqN00vT91EWMI"
)

const Component = () => (
  <div className="App">
    <header className="App__heading">App Component</header>
    <main className="App__main">
      <Router history={history}>
        <Route exact path="/">
          <Product />
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
