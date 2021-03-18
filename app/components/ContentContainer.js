import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomImage from './CustomImage';

export default class ContentContainer extends React.Component {
  render () {
    return (
        <View style={styles.contentContainer}>

             <View style={styles.col2}>
                 <CustomImage 
                 imageSource={require('../img/img3.jpg')} 
                 header='Bags'/>
             </View>

             <View style={styles.col1}>
                <CustomImage 
                imageSource={require('../img/img4.jpg')} 
                header='Shoes'/>
             </View>

             <View style={styles.contentBanner}>
                 <CustomImage 
                 imageSource={require('../img/img5.jpg')} 
                 header='Watches'/>
             </View>

             <View style={styles.col1}>
                 <CustomImage 
                 imageSource={require('../img/img10.jpg')} 
                 header='Kurta'/>
             </View>

             <View style={styles.col2}>
             <CustomImage imageSource={require('../img/img9.jpg')} 
             header='Smart Phones'/>
             </View>

             <View style={styles.contentBanner}>
             <CustomImage 
             imageSource={require('../img/img11.jpg')} 
             header='Wedding Wears'/>
             </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5   
    },
    col1: {
        flex: 1,
        padding: 5
    },
    col2: {
        flex: 2,
        padding: 5
    },
    contentBanner:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
}
 
});