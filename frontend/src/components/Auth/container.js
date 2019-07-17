import React, { Component } from "react";
import Auth from "./presenter";

class Container extends Component {
  state = {
    action: "login"
  };
  render() {
    const { action } = this.state;
    return <Auth action={action} changeAction={this._chagneAction} />;
  }

  _chagneAction = () => {
    this.setState(prevState => {
      const { action } = prevState;
      if (action === "login") {
        return {
          action: "signup"
        };
      } else if (action === "signup") {
        return {
          action: "login"
        };
      }
    });
  };
}

export default Container;