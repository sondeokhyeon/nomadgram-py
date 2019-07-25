import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <FacebookLogin
      appId="2405461752809530"
      autoLoad={true}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-official"
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        placeholder={context.t("Email")}
        className={formStyles.textInput}
        value={props.email}
        name="email"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder={context.t("Full Name")}
        className={formStyles.textInput}
        value={props.fullName}
        name="fullName"
        onChange={props.handleInputChange}
      />
      <input
        type="username"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.userName}
        name="userName"
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.password}
        name="password"
        onChange={props.handleInputChange}
      />
      <input
        type="submit"
        value={context.t("Sign up")}
        className={formStyles.button}
      />
    </form>
    <p className={formStyles.terms}>
      {context.t("By signing up, you agree to our ")}
      <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  email: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
