import {StyleSheet, Dimensions} from 'react-native';
import {ViewScale} from '../config/ViewScale';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ViewScale(20),
    height: ViewScale(50),
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFECAC',
  },
  logoBkk: {
    height: ViewScale(40),
    width: ViewScale(130),
    alignSelf: 'center',
    marginLeft: ViewScale(30),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    height: ViewScale(20),
    width: ViewScale(20),
    alignSelf: 'center',
  },
  iconprofile: {
    height: ViewScale(22),
    width: ViewScale(22),
    alignSelf: 'center',
    borderRadius: 11,
  },
  icon: {
    alignSelf: 'center',
  },
  texthead: {
    fontSize: ViewScale(18),
    color: '#DAA560',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    marginLeft: ViewScale(30),
    alignSelf: 'center',
    marginTop: ViewScale(5),
    width: width * 0.5,
  },
  texthead1: {
    fontSize: ViewScale(22),
    color: '#DAA560',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: ViewScale(5),
  },
});

export default styles;
