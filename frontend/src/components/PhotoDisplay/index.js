import React from "react";
import PropTypes from "prop-types";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosText from "react-ionicons/lib/IosText";
import styles from "./styles.scss";

const PhotoDisplay = props => (
  <div className={styles.container}>
    <img src={props.photo.file} className={styles.photo} alt="img" />
    <div className={styles.overlay}>
      <span className={styles.data}>
        <IosHeart fontSize="22px" color="white" /> {props.photo.like_count}
      </span>
      <span className={styles.data}>
        <IosText icon="ios-text" fontSize="22px" color="white" />{" "}
        {props.photo.comment_count}
      </span>
    </div>
  </div>
);

PhotoDisplay.propTypes = {
  photo: PropTypes.shape({
    file: PropTypes.string.isRequired,
    comment_count: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired
  }).isRequired
};

export default PhotoDisplay;
