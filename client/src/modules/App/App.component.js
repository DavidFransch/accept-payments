import React from "react"
import { Route } from "react-router-dom"
import { ConnectedRouter as Router } from "connected-react-router"

import history from "../../common/redux/history"
import "./App.css"
import { Product, Checkout } from "../Payments"

const Component = () => (
  <div className="App">
    <header className="App__heading">App Component</header>
    <main className="App__main">
      <Router history={history}>
        <Route exact path="/" component={Product} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </main>
  </div>
)

export default Component
