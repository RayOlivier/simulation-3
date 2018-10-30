import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"

import Nav from "./component/Nav/Nav"
import routes from "./routes"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
