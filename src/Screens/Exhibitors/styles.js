import {Dimensions, Platform, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ViewScale(15),
    width: width * 0.9,
    alignSelf: 'center',
    marginLeft: ViewScale(10),
    zIndex: 999,
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: ViewScale(5),
  },
  icon1: {
    alignSelf: 'center',
    marginHorizontal: ViewScale(10),
    zIndex: 99,
  },
  input: {
    width: ViewScale(320),
    height: Platform.OS === 'ios' ? ViewScale(35) : ViewScale(48),
    // marginLeft: ViewScale(10),
    borderRadius: ViewScale(8),
    fontSize: ViewScale(14),
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
    paddingLeft: ViewScale(10),
  },
  iconsea: {
    width: ViewScale(30),
    height: ViewScale(30),
    alignSelf: 'center',
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.45,
    height: ViewScale(210),
    alignSelf: 'center',
    marginTop: ViewScale(20),
    borderRadius: ViewScale(5),
    marginLeft: ViewScale(15),
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
    width: width * 0.45,
    height: ViewScale(180),
    borderTopLeftRadius: ViewScale(5),
    borderTopRightRadius: ViewScale(5),
    borderBottomWidth: ViewScale(0.5),
    borderBottomColor: '#33333350',
  },
  buttonloadmore: {
    width: width * 0.45,
    height: ViewScale(35),
    borderRadius: ViewScale(12),
    backgroundColor: '#CCCCCC',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: ViewScale(30),
    marginBottom: ViewScale(50),
  },
  textloadmore: {
    fontSize: ViewScale(12),
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  row: {
    flexDirection: 'row',
    width: width * 0.42,
    paddingHorizontal: ViewScale(10),
    alignSelf: 'center',
    height: ViewScale(30),
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
  row1: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.7,
    justifyContent: 'space-between',
    marginTop: ViewScale(20),
    marginBottom: ViewScale(70),
  },
  button: {
    width: width * 0.3,
    height: ViewScale(42),
    borderWidth: 1,
    borderColor: '#DAA560',
    borderRadius: ViewScale(2),
    justifyContent: 'center',
  },
  textbotton: {
    fontSize: ViewScale(16),
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },

  icon: {
    alignSelf: 'center',
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
    fontSize: ViewScale(20),
    alignSelf: 'center',
    marginLeft: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
  textsorthead: {
    fontSize: ViewScale(16),
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
    fontSize: ViewScale(16),
    fontFamily: 'Cantoria MT Std',
    color: '#000',
    alignSelf: 'center',
  },
  linersort: {
    width: ViewScale(width * 0.85),
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
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textouch: {
    fontSize: ViewScale(18),
    fontFamily: 'Cantoria MT Std',
    color: '#DAA560',
    alignSelf: 'center',
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: ViewScale(40),
    height: ViewScale(40),
    backgroundColor: '#fff',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
    right: ViewScale(30),
    bottom: ViewScale(30),
    borderColor: '#000000',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: ViewScale(15),
  },

  FloatingActionButtonImageStyle: {
    width: ViewScale(30),
    height: ViewScale(30),
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});

export default styles;
