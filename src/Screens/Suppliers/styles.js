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
    bottom: 0,
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
});

export default styles;
