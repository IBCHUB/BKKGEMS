import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../config/ViewScale';
const {width, height} = Dimensions.get('window');
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
const styles = StyleSheet.create({
  container: {
    height: height,
    paddingTop:
      Platform.OS === 'ios' ? StaticSafeAreaInsets.safeAreaInsetsTop : 25,
    backgroundColor: '#000',
  },
  touchdrawer: {
    fontSize: ViewScale(20),
    marginTop: ViewScale(20),
    color: '#fff',
    marginLeft: ViewScale(15),
    fontFamily: 'Cantoria MT Std',
  },
  touchindrawer: {
    fontSize: ViewScale(18),
    marginTop: ViewScale(20),
    color: '#fff',
    marginLeft: ViewScale(25),
    fontFamily: 'Cantoria MT Std',
  },
  imgprofile: {
    width: ViewScale(50),
    height: ViewScale(50),
    margin: ViewScale(15),
    borderRadius: ViewScale(25),
  },
  row: {
    flexDirection: 'row',
  },
  rowlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.715,
    paddingRight: ViewScale(20),
  },
  texthead: {
    fontSize: ViewScale(24),
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
    fontSize: ViewScale(24),
    marginTop: ViewScale(20),
    color: 'red',
    marginLeft: ViewScale(15),
    fontFamily: 'Cantoria MT Std',
  },
  icon: {
    marginTop: ViewScale(10),
    marginLeft: ViewScale(15),
  },
  touchdrawer1: {
    fontSize: ViewScale(12),
    marginTop: ViewScale(20),
    color: '#fff',
    marginLeft: ViewScale(15),
    fontFamily: 'Cantoria MT Std',
  },
  rowfair: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  texttime: {
    fontFamily: 'Cantoria MT Std',
    fontSize: ViewScale(18),
    alignSelf: 'center',
    color: '#fff',
  },
  texttime1: {
    fontFamily: 'Cantoria MT Std',
    fontSize: ViewScale(10),
    color: '#fff',
    alignSelf: 'flex-start',
  },
});

export default styles;
