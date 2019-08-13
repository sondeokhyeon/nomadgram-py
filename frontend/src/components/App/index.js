import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, onwProps) => {
  const {
    user,
    router: { location }
  } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  };
};

export default connect(mapStateToProps)(Container);
