import React from "react";
import styles from "./styles.scss";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={styles.whiteBox}>
        {(() => {
          // eslint-disable-next-line default-case
          switch (props.action) {
            case "login":
              return (
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={props.changeAction}
                    className={styles.changeLink}
                  >
                    Sign up
                  </span>
                </p>
              );
            case "signup":
              return (
                <p>
                  Have an account?{" "}
                  <span
                    onClick={props.changeAction}
                    className={styles.changeLink}
                  >
                    Log in
                  </span>
                </p>
              );
          }
        })()}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img src={require("images/ios.png")} alt="dowload apple on the app" />
          <img
            src={require("images/android.png")}
            alt="dowload apple on the app"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
