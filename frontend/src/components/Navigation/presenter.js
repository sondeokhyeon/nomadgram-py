import React from "react";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";
import IosHeadsetOutline from "react-ionicons/lib/IosHeadsetOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <input
          type="text"
          placeholder={context.t("Search")}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <IosCompassOutline fontSize="28px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <IosHeadsetOutline
            icon="ios-heart-outline"
            fontSize="28px"
            color="black"
          />
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <IosPersonOutline
              icon="ios-person-outline"
              fontSize="32px"
              color="black"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
