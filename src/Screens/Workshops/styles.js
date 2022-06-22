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
    width: width,
    height: ViewScale(320),
    alignSelf: 'center',
    marginVertical: 5,
  },
  viewdetail: {
    width: width,
    backgroundColor: '#000',
    height: height,
  },
});

export default styles;
