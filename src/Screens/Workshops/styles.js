import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgdetail: {
    width: width,
    height: ViewScale(280),
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
