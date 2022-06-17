import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  textdetail: {
    fontSize: ViewScale(18),
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.9,
    marginTop: ViewScale(30),
  },
  view: {
    backgroundColor: '#EEECE2',
    paddingHorizontal: 20,
  },
  img: {
    width: width * 0.9,
    height: ViewScale(250),
    marginVertical: ViewScale(20),
  },
});

export default styles;
