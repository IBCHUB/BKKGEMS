import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewhead: {
    width: width,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEECE2',
  },

  headtab: {
    width: width * 0.6,
    height: ViewScale(43),
    alignSelf: 'center',
    marginTop: ViewScale(10),
    marginBottom: ViewScale(20),
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.5,
    height: ViewScale(180),
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#EEECE2',
  },
  imgflat: {
    width: width * 0.5,
    height: ViewScale(180),
    borderTopLeftRadius: ViewScale(5),
    borderTopRightRadius: ViewScale(5),
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    width: width * 0.5,
    paddingHorizontal: ViewScale(10),
    alignSelf: 'center',
    height: ViewScale(40),
  },
  imglogo: {
    width: ViewScale(20),
    height: ViewScale(20),
    alignSelf: 'center',
    borderRadius: ViewScale(10),
  },
  text: {
    fontSize: ViewScale(12),
    color: '#FFECAC',
    marginLeft: ViewScale(10),
    alignSelf: 'center',
    width: width * 0.35,
    fontFamily: 'Cantoria MT Std',
  },
  dimon: {
    width: ViewScale(40),
    height: ViewScale(40),
    backgroundColor: '#fff',
    transform: [{rotate: '45deg'}],
    alignSelf: 'flex-end',
    marginTop: -ViewScale(20),
    marginRight: ViewScale(30),
    justifyContent: 'center',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    marginBottom: ViewScale(20),
  },
  icon: {
    alignSelf: 'center',
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: ViewScale(40),
    height: ViewScale(40),
    backgroundColor: '#DAA560',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
    right: ViewScale(30),
    bottom: ViewScale(100),
    borderColor: '#000000',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default styles;
