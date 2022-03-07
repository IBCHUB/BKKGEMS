import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  touchdrawer: {
    fontSize: 20,
    marginTop: 20,
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'Cantoria MT Std',
  },
  touchindrawer: {
    fontSize: 18,
    marginTop: 20,
    color: '#fff',
    marginLeft: 50,
    fontFamily: 'Cantoria MT Std',
  },
  imgprofile: {
    width: 50,
    height: 50,
    margin: 15,
  },
  row: {
    flexDirection: 'row',
  },
  rowlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.715,
    paddingRight: 20,
  },
  texthead: {
    fontSize: 24,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  liner: {
    width: width * 0.715,
    borderBottomWidth: 0.3,
    borderBottomColor: '#fff',
  },
  logout: {
    fontSize: 24,
    marginTop: 20,
    color: 'red',
    marginLeft: 15,
    fontFamily: 'Cantoria MT Std',
  },
});

export default styles;
