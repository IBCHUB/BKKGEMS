import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  imgdimon: {
    width: width,
    height: 430,
    top: 100,
  },
  imssplash: {
    width: width * 0.6,
    height: 250,
    alignSelf: 'center',
    top: 150,
    position: 'relative',
    zIndex: 99,
  },
  containermodal: {
    width: width,
    height: height,
    backgroundColor: '#707070bb',
    justifyContent: 'center',
  },
  viewmodal: {
    width: width * 0.96,
    backgroundColor: '#EEECE2',
    alignSelf: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  iconmodal: {
    alignSelf: 'flex-end',
  },
  texttopicmodal: {
    fontSize: 22,
    color: '#000',
    alignSelf: 'center',
    marginBottom: 10,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonsec: {
    backgroundColor: '#EEECE2',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DAA560',
  },
  textsec: {
    fontSize: 22,
    color: '#DAA560',
    alignSelf: 'center',
  },
  viewrow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -15,
  },
  iconeye: {
    marginLeft: -40,
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default styles;
