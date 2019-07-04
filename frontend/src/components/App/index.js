import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, onwProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);
