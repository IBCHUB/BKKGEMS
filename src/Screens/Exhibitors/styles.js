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
  icon: {
    alignSelf: 'center',
    marginRight: -30,
    zIndex: 99,
  },
  input: {
    width: 320,
    height: 35,
    border: 1,
    backgroundColor: '#fff',
    paddingLeft: 35,
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
  },
  imgflat: {
    width: width * 0.42,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonloadmore: {
    width: width * 0.45,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#CCCCCC',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  textloadmore: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
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
  },
  text: {
    fontSize: 10,
    color: '#000',
    marginLeft: 10,
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  row1: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.7,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 70,
  },
  button: {
    width: width * 0.3,
    height: 42,
    borderWidth: 1,
    borderColor: '#DAA560',
    borderRadius: 2,
    justifyContent: 'center',
  },
  textbotton: {
    fontSize: 16,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  dimon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    transform: [{rotate: '45deg'}],
    alignSelf: 'flex-end',
    marginTop: -20,
    marginRight: 30,
    justifyContent: 'center',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default styles;
