import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewrow: {
    flexDirection: 'row',
    width: width * 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  touch: {
    width: width * 0.5,
    height: 60,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  buttonflat: {
    width: width * 1,
    flexDirection: 'row',
    borderTopColor: '#EEECE2',
    borderBottomColor: '#EEECE2',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imgflat: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 15,
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DAA560',
  },
  topchat: {
    fontSize: 14,
    fontFamily: 'Cantoria MT Std',
    color: '#DAA560',
    marginTop: 5,
    width: width * 0.45,
  },
  detail: {
    fontSize: 14,
    fontFamily: 'Cantoria MT Std',
    color: '#010302',
    marginTop: 5,
  },
  row: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingVertical: 10,
  },
  unread: {
    width: 14,
    height: 14,
    alignSelf: 'flex-end',
    borderRadius: 7,
    backgroundColor: 'red',
  },
  roww: {
    width: width * 0.8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 20,
  },
  texttime: {
    fontSize: 10,
    fontFamily: 'Cantoria MT Std',
    color: '#010302',
    alignSelf: 'flex-end',
    marginTop: 40,
    justifyContent: 'flex-end',
    width: width * 0.15,
  },
  chat: {
    height: height * 0.9,
  },
});

export default styles;
