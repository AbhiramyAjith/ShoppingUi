import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component {
  render () {
    return (
     <ImageBackground source ={require('../img/img7.jpg')}
      style={styles.banner}>
         <ImageOverlay
          header='Explore Now'
          paragraph=''/>

     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    alignItems:'center',
    justifyContent: 'center',
  }
});