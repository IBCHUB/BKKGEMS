import {Dimensions, Platform, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  containerview: {
    paddingBottom: ViewScale(50),
    backgroundColor: '#000000',
    width: width,
    height: height,
  },
  buttonflat: {
    width: width * 0.85,
    height: Platform.OS == 'ios' ? ViewScale(70) : ViewScale(80),
    alignSelf: 'center',
    backgroundColor: '#343434',
    marginVertical: ViewScale(10),
    paddingHorizontal: ViewScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: ViewScale(4),
  },
  text: {
    fontSize: ViewScale(20),
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.7,
  },
  containertags: {
    width: width * 0.82,
    backgroundColor: '#EEECE2',
    alignSelf: 'center',
    marginTop: ViewScale(-10),

    paddingVertical: ViewScale(10),
    borderBottomLeftRadius: ViewScale(5),
    borderBottomRightRadius: ViewScale(5),
  },
  tags: {
    fontSize: ViewScale(18),
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.7,
  },
  auto: {
    width: '90%',
    alignSelf: 'center',
    fontSize: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
});

export default styles;
