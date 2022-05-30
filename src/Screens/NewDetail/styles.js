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
    height: ViewScale(250),
    marginBottom: ViewScale(10),
  },
  icon: {
    marginTop: ViewScale(10),
    marginLeft: ViewScale(20),
  },
  textheader: {
    fontSize: ViewScale(22),
    color: '#646363',
    marginVertical: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.9,
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: ViewScale(18),
    width: width * 0.9,
    fontFamily: 'Cantoria MT Std',
    marginVertical: ViewScale(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    height: ViewScale(50),
    borderBottomColor: '#DAA560',
    borderBottomWidth: 1.5,
  },
  textmini: {
    color: '#646363',
    fontSize: ViewScale(14),
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  botton: {
    width: ViewScale(80),
    height: ViewScale(24),
    borderRadius: ViewScale(15),
    backgroundColor: '#6F6F6F',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textshare: {
    fontFamily: 'Cantoria MT Std',
    fontSize: ViewScale(13),
    color: '#fff',
    alignSelf: 'center',
  },
  iconshare: {
    alignSelf: 'center',
    marginRight: ViewScale(5),
  },
  rowtags: {
    flexDirection: 'row',
    paddingBottom: 30,
    width: width * 0.9,
    alignSelf: 'center',
    marginBottom: ViewScale(50),
  },
  viewtag: {
    height: ViewScale(22),
    justifyContent: 'center',
    marginRight: ViewScale(5),
    backgroundColor: '#DEDDD4',
    borderRadius: ViewScale(4),
    paddingHorizontal: ViewScale(5),
    alignSelf: 'center',
  },
  textags: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: ViewScale(13),
    fontFamily: 'Cantoria MT Std',
  },
  tags: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: ViewScale(18),
    fontFamily: 'Cantoria MT Std',
    marginVertical: ViewScale(20),
  },
  auto: {
    width: Dimensions.get('window').width * 0.9,
    marginTop: ViewScale(10),
    alignSelf: 'center',
    fontSize: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
});

export default styles;
