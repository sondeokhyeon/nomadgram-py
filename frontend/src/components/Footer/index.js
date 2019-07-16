import React from "react";
import PropTypes from "prop-types";
import styles from "./style.scss";

class Footer extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.column}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.list_item}>{this.context.t("About us")}</li>
              <li className={styles.list_item}>{this.context.t("Support")}</li>
              <li className={styles.list_item}>{this.context.t("Blog")}</li>
              <li className={styles.list_item}>{this.context.t("Press")}</li>
              <li className={styles.list_item}>{this.context.t("API")}</li>
              <li className={styles.list_item}>{this.context.t("Jobs")}</li>
              <li className={styles.list_item}>{this.context.t("Privacy")}</li>
              <li className={styles.list_item}>{this.context.t("terms")}</li>
              <li className={styles.list_item}>
                {this.context.t("Directory")}
              </li>
              <li className={styles.list_item}>{this.context.t("Lanuage")}</li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <span className={styles.copylight}>© 2019 Nomadgram</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
