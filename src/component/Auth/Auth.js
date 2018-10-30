import React, { Component } from "react"

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }

    this.changeInput = this.changeInput.bind(this)
  }

  changeInput() {}

  render() {
    return (
      <div className="auth">
        <img
          className="logo"
          src="http://www.supersoluce.com/sites/default/files/styles/picto_soluce/lunettes.png"
          alt="helo-logo"
        />
        <h1>Helo</h1>
        <div className="auth-input">
          Username:
          <input name="username" placeholder="Enter username..." />
        </div>
        <div className="auth-input">
          Password:
          <input name="password" placeholder="Enter password..." />
        </div>

        <div className="buttons">
          <button className="button">Login</button>
          <button className="button">Register</button>
        </div>
      </div>
    )
  }
}

export default Auth
