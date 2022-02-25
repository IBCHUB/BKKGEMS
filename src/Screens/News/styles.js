import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  buttonflat: {
    width: width,
    height: 210,
    marginBottom: 5,
  },
  linear: {
    width: width,
    height: 210,
    zIndex: 99,
    // position: 'absolute',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  containerview: {
    width: width,
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Cantoria MT Std',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: 50,
    zIndex: 333,
  },
  button: {
    width: width * 0.25,
    height: 42,
    borderWidth: 1,
    borderColor: '#DAA560',
    borderRadius: 2,
  },
});

export default styles;
