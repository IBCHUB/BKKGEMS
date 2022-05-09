import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgdetail: {
    width: width * 0.88,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  icon: {
    marginTop: 10,
    marginLeft: 20,
  },
  textheader: {
    fontSize: 20,
    color: '#DAA560',
    marginTop: 20,
    fontFamily: 'Cantoria MT Std',
    marginBottom: 10,
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: 16,
    width: width * 0.88,
    fontFamily: 'Cantoria MT Std',
    marginBottom: 20,
  },

  viewdetail: {
    width: width,
    backgroundColor: '#000',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  viewdetail1: {
    width: width,
    backgroundColor: '#000',
  },
  imgdetail1: {
    width: width * 1,
    height: height * 0.12,
    alignSelf: 'center',
  },
  imgdetail2: {
    width: width * 0.88,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default styles;
