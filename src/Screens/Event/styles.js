import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {ViewScale} from '../../config/ViewScale';
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  buttonflat: {
    width: width * 0.85,
    height: ViewScale(70),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#343434',
    marginVertical: ViewScale(10),
    borderRadius: ViewScale(5),
  },
  containerview: {
    marginBottom: ViewScale(50),
    backgroundColor: '#000000',
    width: width,
    height: height,
  },
  text: {
    fontSize: ViewScale(20),
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  text1: {
    fontSize: ViewScale(18),
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    textAlign: 'center',
    width: width * 0.65,
    alignSelf: 'center',
  },
});

export default styles;
