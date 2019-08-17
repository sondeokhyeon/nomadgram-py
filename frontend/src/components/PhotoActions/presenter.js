import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.actions}>
    <div className={styles.icons}>
      <span className={styles.icons} onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <IosHeart fontSize="28px" color="#EB4B59" />
        ) : (
          <IosHeartOutline fontSize="28px" color="black" />
        )}
      </span>
      <span className={styles.icons}>
        <IosTextOutline fontSize="28px" color="black" />
      </span>
    </div>
    <span className={styles.likes} onClick={props.openLikes}>
      {props.number}{" "}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
