// // Require the module 
// import {MediaControls, PLAYER_STATE} from 'react-native-media-controls';
// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   Alert,
//   Video
// } from 'react-native';
// import styles from './MediaControlStyles';


// export default class doubleClicker extends Component {
//   constructor() {
//     super();
//     this.state = {
//       paused: true;
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Video
//           ref="videoPlayer"
//           style={styles.mediaPlayer}
//           resizeMode="cover"
//           source={{uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}
//           volume={0.0}
//           paused={this.state.paused}
//           onEnd={this.onEnd}
//           onLoad={this.onLoad}
//           onLoadStart={this.onLoadStart}
//           onProgress={this.onProgress}
//         />
//         <MediaControls
//           toolbar={this.renderToolbar()}
//           playerState={this.state.playerState}
//           isLoading={this.state.isLoading}
//           progress={this.state.currentTime}
//           duration={this.state.duration}
//           onPaused={this.onPaused}
//           onSeek={this.onSeek}
//           onReplay={this.onReplay}
//         />
//       </View>
//     );
//   }
// }