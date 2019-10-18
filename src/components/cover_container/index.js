import React from 'react';

import VideoCoverMedia from '../video_cover_media';
import styles from "./styles.module.scss";

class CarIndex extends React.Component {
  render() {
    return(
      <div className={styles.background}>
        <VideoCoverMedia />
      </div>
    )
  }
}

export default CarIndex;
