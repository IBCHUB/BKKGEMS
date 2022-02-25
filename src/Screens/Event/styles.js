import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  buttonflat: {
    width: width * 0.85,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#343434',
    marginVertical: 10,
  },
  containerview: {
    marginBottom: 50,
    backgroundColor: '#000000',
    width: width,
    height: height,
  },
  text: {
    fontSize: 16,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
});

export default styles;
