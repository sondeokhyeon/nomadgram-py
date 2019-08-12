import React from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends React.Component {
  state = {
    email: "",
    name: "",
    userName: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };
  render() {
    const { email, name, userName, password } = this.state;
    return (
      <SignupForm
        email={email}
        name={name}
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
    const { email, name, password, userName } = this.state;
    const { createAccount } = this.props;
    event.preventDefault();
    createAccount(userName, password, email, name);
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

//<SignupForm {...props} />;
export default Container;
