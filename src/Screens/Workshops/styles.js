import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgdetail: {
    width: width,
    height: 280,
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
