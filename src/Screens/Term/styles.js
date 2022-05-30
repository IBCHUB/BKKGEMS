import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  textdetail: {
    fontSize: ViewScale(18),
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.9,
  },
  view: {
    backgroundColor: '#EEECE2',
    paddingHorizontal: ViewScale(20),
    paddingVertical: ViewScale(30),
  },
});

export default styles;
