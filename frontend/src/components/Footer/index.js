import React from "react";
import styles from "./style.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>About us</li>
          <li className={styles.list_item}>Support</li>
          <li className={styles.list_item}>Blog</li>
          <li className={styles.list_item}>Press</li>
          <li className={styles.list_item}>API</li>
          <li className={styles.list_item}>Jobs</li>
          <li className={styles.list_item}>Privacy</li>
          <li className={styles.list_item}>terms</li>
          <li className={styles.list_item}>Directory</li>
          <li className={styles.list_item}>Lanuage</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copylight}>© 2019 Nomadgram</span>
    </div>
  </footer>
);

export default Footer;
