import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  text: {
    fontSize: 20,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginVertical: 20,
    marginLeft: 20,
  },
  dot: {
    width: width * 0.9,
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 20,
  },
  push: {
    width: 30,
    height: 30,
    alignSelf: 'center',
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
    paddingTop: 25,
    paddingBottom: 35,
  },
  iconmodal: {
    alignSelf: 'flex-end',
  },
  calendar: {
    width: width * 0.85,

    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  textmodal: {
    fontSize: 20,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginTop: 20,
    marginLeft: 10,
  },
  buttonexhi: {
    backgroundColor: '#EEECE2',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DAA560',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  textexhi: {
    fontSize: 20,
    color: '#DAA560',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textinput: {
    width: width * 0.9,
    height: 120,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 20,
    borderColor: '#636363',
    borderWidth: 0.1,
    paddingLeft: 20,
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#EEECE2',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DAA560',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
});

export default styles;
