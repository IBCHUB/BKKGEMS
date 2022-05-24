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
  containersort: {
    flex: 1,
    padding: 20,
  },
  viewsort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
  },
  textsort: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 20,
    fontFamily: 'Cantoria MT Std',
  },
  textsorthead: {
    fontSize: 16,
    fontFamily: 'Cantoria MT Std',
    color: '#444444',
  },
  bottomsort: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
    marginRight: 15,
  },
  textsortdetail: {
    fontSize: 16,
    fontFamily: 'Cantoria MT Std',
    color: '#000',
    alignSelf: 'center',
  },
  linersort: {
    width: width * 0.85,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: 15,
  },
  bottontags: {
    width: width * 0.4,
    height: 40,
    borderWidth: 1,
    borderColor: '#44444450',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  rowbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    alignSelf: 'center',
    marginVertical: 20,
  },
  touch: {
    width: width * 0.4,
    height: 35,
    borderColor: '#DAA560',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textouch: {
    fontSize: 18,
    fontFamily: 'Cantoria MT Std',
    color: '#DAA560',
    alignSelf: 'center',
  },
  tags: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#DAA560',
    paddingLeft: 20,
    paddingVertical: 20,
  },
  texttags: {
    fontSize: 14,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
  },
  roww: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DAA560',
  },
  buttonflat: {
    width: width * 0.45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  imgflat: {
    width: width * 0.4,
    height: 150,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
  },
  imgflat1: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgflat2: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 14,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
    width: width * 0.3,
    textAlign: 'center',
    marginTop: 10,
  },
  iconsea2: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  com: {
    marginVertical: height * 0.1,
  },
  textccom: {
    fontSize: 24,
    color: '#64636350',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
});

export default styles;