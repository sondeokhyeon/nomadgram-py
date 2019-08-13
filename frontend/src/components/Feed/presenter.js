import React from "react";
import PropTypes from "prop-types";
import styles from "./style.scss";
import Loading from "components/Loading";

const Feed = props => {
  if (props.loading) {
    return <LoadingFeed />;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

Feed.prototype = {
  loading: PropTypes.bool.isRequired
};

export default Feed;
