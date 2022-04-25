import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  textdetail: {
    fontSize: 16,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.85,
  },
  view: {
    backgroundColor: '#EEECE2',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  img: {
    width: width * 0.9,
    height: 510,
    marginVertical: 50,
  },
});

export default styles;
