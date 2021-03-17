import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default class Banner extends React.Component {
  render () {
    return (
     <Image source ={require('../img/img1.jpg')}
     style={styles.banner}
     />
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
  }
});