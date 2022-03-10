import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  Image,
} from 'react-native';
export const {height, width} = Dimensions.get('window');
//ipad

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    width: '100%',
    height: height,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
