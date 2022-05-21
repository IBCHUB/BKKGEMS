import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgHeader: {
    width: width,
    height: 250,
    justifyContent: 'flex-end',
  },
  header: {
    width: width,
    // bottom: 0,
    backgroundColor: '#646363bb',
    padding: 20,
  },
  viewsearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: width * 0.9,
    alignSelf: 'center',
  },
  viewinsearch: {
    flexDirection: 'row',
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  icon: {
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
  texthead: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Cantoria MT Std',
  },
  textdetail: {
    fontSize: 16,
    color: '#646363',
    marginHorizontal: 30,
    fontFamily: 'Cantoria MT Std',
    marginVertical: 35,
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
});

export default styles;
