import React from "react";
import PropTypes from "prop-types";
import IosHeadsetOutline from "react-ionicons/lib/IosHeadsetOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div>
    <div>
      <span>
        <IosHeadsetOutline fontSize="28px" color="black" />
      </span>
      <span>
        <IosTextOutline fontSize="28px" color="black" />
      </span>
    </div>
    <span>
      {props.number}{" "}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
