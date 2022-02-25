import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgHeader: {
    width: width,
    height: 250,
  },
  imgdetail: {
    width: width * 0.88,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  icon: {
    marginTop: 10,
    marginLeft: 20,
  },
  textheader: {
    fontSize: 22,
    color: '#DAA560',
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: 16,
    width: width * 0.88,
    fontFamily: 'Cantoria MT Std',
    marginBottom: 20,
  },
  textsuphead: {
    color: '#DAA560',
    alignSelf: 'center',
    fontSize: 16,
    width: width * 0.88,
    marginBottom: 20,
    fontFamily: 'Cantoria MT Std',
  },
  viewdetail: {
    width: width,
    backgroundColor: '#000',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  linearGradient: {
    width: width,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
});

export default styles;
