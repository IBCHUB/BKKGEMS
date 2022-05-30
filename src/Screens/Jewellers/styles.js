import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgdetail: {
    width: width * 0.88,
    height: ViewScale(150),
    alignSelf: 'center',
    marginVertical: ViewScale(20),
  },
  icon: {
    marginTop: ViewScale(10),
    marginLeft: ViewScale(20),
  },
  textheader: {
    fontSize: ViewScale(22),
    color: '#DAA560',
    marginTop: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
    marginBottom: ViewScale(10),
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: ViewScale(18),
    width: width * 0.88,
    fontFamily: 'Cantoria MT Std',
    marginBottom: ViewScale(20),
  },

  viewdetail: {
    width: width,
    backgroundColor: '#000',
    paddingBottom: ViewScale(20),
    paddingHorizontal: ViewScale(20),
  },
  viewdetail1: {
    width: width,
    backgroundColor: '#000',
  },
  imgdetail1: {
    width: width * 1,
    height: height * 0.12,
    alignSelf: 'center',
  },
  imgdetail2: {
    width: width * 0.88,
    height: ViewScale(200),
    alignSelf: 'center',
    marginVertical: ViewScale(20),
  },
});

export default styles;
