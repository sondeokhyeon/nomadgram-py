import React from "react";
import LoginForm from "./presenter";

class Container extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }
  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;

    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
  };
}

export default Container;
