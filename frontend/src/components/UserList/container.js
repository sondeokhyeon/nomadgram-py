import React, { Component } from "react";
import UserDisplay from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const { userList } = this.props;
    if (userList) {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return <UserDisplay {...this.props} {...this.state} />;
  }
}

export default Container;
