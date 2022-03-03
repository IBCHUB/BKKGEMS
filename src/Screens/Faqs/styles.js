import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  containerview: {
    paddingBottom: 50,
    backgroundColor: '#000000',
    width: width,
    height: height,
  },
  buttonflat: {
    width: width * 0.85,
    height: 70,
    alignSelf: 'center',
    backgroundColor: '#343434',
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.7,
  },
  containertags: {
    width: width * 0.82,
    backgroundColor: '#EEECE2',
    alignSelf: 'center',
    marginTop: -10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  tags: {
    fontSize: 16,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.7,
  },
});

export default styles;
