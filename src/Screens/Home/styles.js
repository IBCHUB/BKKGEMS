import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {ViewScale} from '../../config/ViewScale';
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewback: {
    backgroundColor: '#000',
    // position: 'relative',
  },
  imgtop: {
    width: width,
    height: ViewScale(350),
  },
  imgletf: {
    width: width,
    height: ViewScale(280),
    marginLeft: ViewScale(-60),
  },
  imgR: {
    width: width,
    height: ViewScale(250),
    marginLeft: ViewScale(40),
    marginTop: ViewScale(-20),
  },
  imgB: {
    width: width,
    height: ViewScale(290),
    marginTop: height * 0.9,
    marginLeft: ViewScale(-60),
  },
  viewon: {
    position: 'absolute',
    width: width,
    justifyContent: 'center',
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ViewScale(15),
    width: width * 0.9,
    alignSelf: 'center',
    marginLeft: ViewScale(10),
    // position: 'absolute',
    zIndex: 999,
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: ViewScale(8),
  },
  icon: {
    alignSelf: 'center',
    marginLeft: ViewScale(5),
    marginRight: ViewScale(7),
    zIndex: 99,
  },
  input: {
    width: ViewScale(270),
    height: ViewScale(30),
    marginLeft: ViewScale(10),
    borderRadius: ViewScale(20),
    fontSize: ViewScale(16),
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
  },
  iconsea: {
    width: ViewScale(25),
    height: ViewScale(25),
    alignSelf: 'center',
  },
  linearGradient: {
    width: width * 0.82,
    alignSelf: 'center',
    marginTop: ViewScale(70),
    paddingVertical: ViewScale(10),
    backgroundColor: 'rgba(47,47,47,0.7),rgba(16,16,16,1)',
    position: 'relative',
  },

  imgpre: {
    width: width * 0.6,
    height: ViewScale(40),
    alignSelf: 'center',
    marginVertical: ViewScale(10),
  },
  imgtime: {
    width: width,
    height: ViewScale(90),
    alignSelf: 'center',
    paddingVertical: ViewScale(10),
    marginBottom: -ViewScale(10),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.6,
    justifyContent: 'space-between',
    marginBottom: ViewScale(10),
  },
  texttop: {
    fontSize: ViewScale(15),
    color: '#DAA560',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  texttop1: {
    fontSize: ViewScale(15),
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Cantoria MT Std',
  },
  imglive: {
    width: width * 0.8,
    alignSelf: 'center',
    height: ViewScale(190),
    marginVertical: ViewScale(30),
  },
  imgS: {
    width: width * 0.8,
    height: ViewScale(140),
  },
  logob: {
    width: ViewScale(90),
    height: ViewScale(60),
  },
  logonline: {
    width: ViewScale(90),
    height: ViewScale(10),
    marginTop: ViewScale(10),
  },
  textfair: {
    fontSize: ViewScale(28),
    alignSelf: 'center',
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    marginTop: ViewScale(5),
  },
  viewfair: {
    alignSelf: 'center',
    width: width * 0.6,
    justifyContent: 'center',
    paddingLeft: ViewScale(5),
    marginTop: ViewScale(20),
  },
  linerfair: {
    width: width * 0.55,
    borderBottomColor: '#DAA560',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  rowfair: {
    flexDirection: 'row',
    marginVertical: ViewScale(10),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dimon: {
    width: ViewScale(6),
    height: ViewScale(6),
    backgroundColor: '#DAA560',
    transform: [{rotate: '45deg'}],
    alignSelf: 'center',
  },
  texttime: {
    fontFamily: 'Cantoria MT Std',
    fontSize: ViewScale(20),
    alignSelf: 'center',
    color: '#DAA560',
  },
  texttime1: {
    fontFamily: 'Cantoria MT Std',
    fontSize: ViewScale(10),
    color: '#DAA560',
    alignSelf: 'flex-start',
  },
  containersort: {
    flex: 1,
    padding: ViewScale(20),
  },
  viewsort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
  },
  textsort: {
    fontSize: ViewScale(22),
    alignSelf: 'center',
    marginLeft: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
  textsorthead: {
    fontSize: ViewScale(18),
    fontFamily: 'Cantoria MT Std',
    color: '#444444',
  },
  bottomsort: {
    width: ViewScale(20),
    height: ViewScale(20),
    borderRadius: ViewScale(10),
    borderWidth: 1,
    borderColor: '#444',
    marginRight: ViewScale(15),
  },
  textsortdetail: {
    fontSize: ViewScale(18),
    fontFamily: 'Cantoria MT Std',
    color: '#000',
    alignSelf: 'center',
  },
  linersort: {
    width: width * 0.85,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: ViewScale(15),
  },
  bottontags: {
    width: width * 0.4,
    height: ViewScale(40),
    borderWidth: 1,
    borderColor: '#44444450',
    justifyContent: 'center',
    marginTop: ViewScale(10),
    borderRadius: ViewScale(10),
  },
  rowbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    alignSelf: 'center',
    marginVertical: ViewScale(20),
  },
  touch: {
    width: width * 0.4,
    height: ViewScale(35),
    borderColor: '#DAA560',
    borderWidth: 1,
    borderRadius: ViewScale(4),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textouch: {
    fontSize: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
    color: '#DAA560',
    alignSelf: 'center',
  },
  rowcall: {
    flexDirection: 'row',
    width: width * 0.65,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: ViewScale(3),
  },
  count: {
    fontSize: ViewScale(32),
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  count1: {
    fontSize: ViewScale(12),
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: ViewScale(-5),
  },
  count2: {
    fontSize: ViewScale(32),
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: -ViewScale(10),
  },
});

export default styles;
