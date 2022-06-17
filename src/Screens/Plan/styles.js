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
    fontSize: ViewScale(16),
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.85,
  },
  view: {
    backgroundColor: '#EEECE2',
    paddingHorizontal: ViewScale(20),
    paddingVertical: ViewScale(30),
    height: height,
  },
  img: {
    width: width * 0.9,
    height: ViewScale(300),
    marginVertical: ViewScale(20),
  },
});

export default styles;
