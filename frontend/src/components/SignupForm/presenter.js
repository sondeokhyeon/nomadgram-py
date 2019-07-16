import React from "react";
import PropTypes from "prop-types";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import formStyle from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyle.formComponent}>
    <h3 className={formStyle.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button className={formStyle.button}>
      <LogoFacebook fontSize="20px" color="white" /> Log in with Facebook
    </button>
    <span className={formStyle.divider}>or</span>
    <form className={formStyle.form}>
      <input type="email" placeholder="Email" className={formStyle.textInput} />
      <input
        type="text"
        placeholder="Full Name"
        className={formStyle.textInput}
      />
      <input
        type="username"
        placeholder="Username"
        className={formStyle.textInput}
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyle.textInput}
      />
      <input type="submit" value="Sign up" className={formStyle.button} />
    </form>
    <p className={formStyle.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
