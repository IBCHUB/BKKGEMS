import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  imgdimon: {
    width: width,
    height: 430,
    top: 100,
  },
  imssplash: {
    width: width * 0.6,
    height: 250,
    alignSelf: 'center',
    top: 150,
    position: 'relative',
    zIndex: 99,
  },
});

export default styles;
