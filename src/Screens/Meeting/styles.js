import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  view: {
    backgroundColor: '#EEECE2',
  },
  text: {
    fontSize: 20,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginVertical: 20,
    marginLeft: 20,
  },
});

export default styles;
