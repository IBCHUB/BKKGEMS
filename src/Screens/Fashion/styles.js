import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  imgdetail: {
    width: width * 0.88,
    height: ViewScale(150),
    alignSelf: 'center',
    marginVertical: ViewScale(20),
  },
  icon: {
    marginTop: 10,
    marginLeft: ViewScale(20),
  },
  textheader: {
    fontSize: ViewScale(22),
    color: '#DAA560',
    marginVertical: ViewScale(20),
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

  viewdetail: {
    width: width,
    backgroundColor: '#000',
    paddingBottom: ViewScale(20),
    paddingHorizontal: ViewScale(20),
  },
});

export default styles;
