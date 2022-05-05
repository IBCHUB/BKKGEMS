import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: width * 0.9,
    alignSelf: 'center',
    marginLeft: 10,
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  icon1: {
    alignSelf: 'center',
    marginLeft: 10,
    zIndex: 99,
  },
  input: {
    width: 270,
    height: 35,
    marginLeft: 10,
    borderRadius: 8,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
  },
  iconsea: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.42,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 20,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  imgflat: {
    width: width * 0.42,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#33333350',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#DAA560',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
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
  tags: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#DAA560',

    paddingVertical: 20,
  },
  texttags: {
    fontSize: 14,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginLeft: 20,
  },
  roww: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
  },
  icon: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    width: width * 0.42,
    paddingHorizontal: 10,
    alignSelf: 'center',
    height: 30,
  },
  imglogo: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#444',
    borderWidth: 0.1,
    shadowColor: '#000000',
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
