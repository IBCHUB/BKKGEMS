import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ViewScale(15),
    width: width * 0.9,
    alignSelf: 'center',
    marginLeft: ViewScale(10),
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: ViewScale(8),
  },
  icon1: {
    alignSelf: 'center',
    marginLeft: ViewScale(10),
    zIndex: 99,
  },
  input: {
    width: ViewScale(315),
    height: ViewScale(35),
    marginLeft: ViewScale(10),
    borderRadius: ViewScale(8),
    fontSize: ViewScale(14),
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
  },
  iconsea: {
    width: ViewScale(25),
    height: ViewScale(25),
    alignSelf: 'center',
  },
  imglogo: {
    width: ViewScale(20),
    height: ViewScale(20),
    alignSelf: 'center',
    borderRadius: ViewScale(10),
    borderColor: '#444',
    borderWidth: 0.1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: ViewScale(15),
  },
  text: {
    fontSize: ViewScale(10),
    color: '#000',
    marginLeft: ViewScale(10),
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.3,
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.42,
    height: ViewScale(150),
    alignSelf: 'center',
    marginTop: ViewScale(20),
    borderRadius: ViewScale(5),
    marginLeft: ViewScale(20),
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: ViewScale(15),
  },
  imgflat: {
    width: width * 0.42,
    height: ViewScale(120),
    borderTopLeftRadius: ViewScale(5),
    borderTopRightRadius: ViewScale(5),
    borderBottomWidth: ViewScale(0.5),
    borderBottomColor: '#33333ViewScale(35)0',
  },
  row: {
    flexDirection: 'row',
    width: width * 0.42,
    paddingHorizontal: ViewScale(10),
    alignSelf: 'center',
    height: ViewScale(30),
  },
  roww: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    marginBottom: 10,
  },
  texttags: {
    fontSize: ViewScale(16),
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginLeft: ViewScale(20),
  },
});

export default styles;
