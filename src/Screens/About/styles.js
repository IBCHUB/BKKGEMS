import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgHeader: {
    width: width,
    height: ViewScale(360),
  },
  imgdetail: {
    width: width * 0.88,
    height: ViewScale(300),
    alignSelf: 'center',
    marginBottom: ViewScale(20),
  },
  icon: {
    marginTop: ViewScale(10),
    marginLeft: ViewScale(20),
  },
  textheader: {
    fontSize: ViewScale(24),
    color: '#DAA560',
    marginVertical: ViewScale(20),
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: ViewScale(18),
    width: width * 0.88,
    fontFamily: 'Cantoria MT Std',
    marginBottom: ViewScale(20),
  },
  textsuphead: {
    color: '#DAA560',
    alignSelf: 'center',
    fontSize: ViewScale(18),
    width: width * 0.88,
    marginBottom: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
  viewdetail: {
    width: width,
    backgroundColor: '#000',
    paddingBottom: ViewScale(20),
    paddingHorizontal: ViewScale(20),
  },
  linearGradient: {
    width: width,
    paddingBottom: height * 0.15,
    paddingHorizontal: ViewScale(20),
  },
});

export default styles;
