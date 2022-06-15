import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgHeader: {
    width: width,
    height: ViewScale(350),
    justifyContent: 'flex-end',
  },
  header: {
    width: width,
    // bottom: 0,
    backgroundColor: '#646363bb',
    padding: ViewScale(20),
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ViewScale(15),
    width: width * 0.9,
    alignSelf: 'center',
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: ViewScale(4),
  },
  icon: {
    alignSelf: 'center',
    marginLeft: ViewScale(10),
    zIndex: 99,
  },
  input: {
    width: ViewScale(320),
    height: Platform.OS === 'ios' ? ViewScale(35) : ViewScale(48),
    marginLeft: ViewScale(10),
    borderRadius: ViewScale(20),
    fontSize: ViewScale(16),
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
  },
  iconsea: {
    width: ViewScale(30),
    height: ViewScale(30),
    alignSelf: 'center',
  },
  texthead: {
    fontSize: ViewScale(12),
    color: '#fff',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.96,
  },
  textdetail: {
    fontSize: ViewScale(18),
    color: '#646363',
    marginHorizontal: ViewScale(30),
    fontFamily: 'Cantoria MT Std',
    marginVertical: ViewScale(35),
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
    width: width * 0.88,
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
  imgHeader1: {
    width: width * 0.9,
    height: ViewScale(350),
    alignSelf: 'center',
  },
});

export default styles;
