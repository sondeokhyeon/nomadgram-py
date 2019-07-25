import React from "react";
import SignupForm from "./presenter";

class Container extends React.Component {
  state = {
    email: "",
    fullName: "",
    userName: "",
    password: ""
  };
  render() {
    const { email, fullName, userName, password } = this.state;
    return (
      <SignupForm
        email={email}
        fullName={fullName}
        userName={userName}
        password={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
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
    console.log(this.state);
  };
  _handleFacebookLogin = response => {
    console.log(response);
  };
}

//<SignupForm {...props} />;
export default Container;
