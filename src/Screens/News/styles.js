import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  buttonflat: {
    width: width,
    height: 210,
    marginBottom: 5,
  },
  linear: {
    width: width,
    height: 210,
    zIndex: 99,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  containerview: {
    width: width,
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Cantoria MT Std',
  },
  row: {
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
  input: {
    width: width * 0.9,
    height: 35,
    border: 1,
    backgroundColor: '#fff',
    paddingLeft: 35,
    borderRadius: 8,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  icon1: {
    alignSelf: 'center',
    marginRight: -30,
    zIndex: 99,
    marginLeft: 20,
  },
  viewsearch: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default styles;
