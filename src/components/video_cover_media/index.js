import React from 'react';
import ReactPlayer from 'react-player'

import styles from "./styles.module.scss";

export default class VideoCoverMedia extends React.Component {

  state = {
    started: false
  }

  onBufferEnd = () => {
    this.setState({
      started: true
    })
  }

  render() {
    return(
      <div className={this.state.started ? styles.playerWrapperLoaded : styles.playerWrapperNotLoaded}>
        <ReactPlayer
          onBufferEnd={this.onBufferEnd}
          onProgress={this.changeOpacity}
          playing={true}
          className={styles.reactPlayer}
          controls={false}
          loop={true}
          url='https://www.youtube.com/watch?v=I1UVolWUqQc'
          height='100%'
          width='100%'
          muted={true}
          light={false}
          config={{
            youtube: {
              playerVars: {
                showInfo: 0,
                disablekb: 1,
                modestbranding: 1,
                rel: 0,
                frameborder:'0'
              }
            }
          }}
          style={{
          }}
        />
      </div>
    )
  }
}
