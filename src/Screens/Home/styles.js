import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewback: {
    backgroundColor: '#000',
    position: 'relative',
  },
  imgtop: {
    width: width,
    height: 350,
  },
  imgletf: {
    width: width,
    height: 280,
    marginLeft: -60,
  },
  imgR: {
    width: width,
    height: 250,
    marginLeft: 40,
    marginTop: -20,
  },
  imgB: {
    width: width,
    height: 290,
    marginTop: height * 1,
    marginLeft: -60,
  },
  viewon: {
    zIndex: 99,
    position: 'absolute',
    width: width,
    justifyContent: 'center',
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
  },
  iconsea: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  linearGradient: {
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 70,
    paddingVertical: 10,
    backgroundColor: 'rgba(47, 47, 47,1), rgba(16, 16, 16, 1) ',
  },
  imghome: {
    width: 240,
    height: 110,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  imgpre: {
    width: 240,
    height: 40,
    alignSelf: 'center',
    marginVertical: 10,
  },
  imgtime: {
    width: width * 0.92,
    height: 100,
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: -10,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.7,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  texttop: {
    fontSize: 16,
    color: '#DAA560',
    alignSelf: 'center',
  },
  texttop1: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
  },
  imglive: {
    width: width * 0.8,
    alignSelf: 'center',
    height: 100,
    marginTop: 30,
    paddingHorizontal: 50,
    flexDirection: 'row',
  },
  imgS: {
    width: 100,
    height: 100,
    marginTop: -15,
  },
  logob: {
    width: 90,
    height: 60,
  },
  logonline: {
    width: 90,
    height: 10,
    marginTop: 10,
  },
});

export default styles;
