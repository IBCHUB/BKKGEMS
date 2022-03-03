import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewinput: {
    width: width,
    backgroundColor: '#343434',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  input: {
    width: width * 0.88,
    height: 50,
    backgroundColor: '#F7F7F7',
    borderRadius: 4,
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: 20,
    borderColor: '#EEECE2',
    borderWidth: 1,
    marginBottom: 20,
    fontFamily: 'Cantoria MT Std',
  },
  input1: {
    width: width * 0.88,
    height: 120,
    backgroundColor: '#F7F7F7',
    borderRadius: 4,
    alignSelf: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
    borderColor: '#EEECE2',
    borderWidth: 1,
    marginBottom: 20,
    fontFamily: 'Cantoria MT Std',
    paddingTop: 10,
  },
  botton: {
    width: width * 0.88,
    height: 50,
    borderRadius: 4,
    alignSelf: 'center',
    borderColor: '#DAA560',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textbotton: {
    fontFamily: 'Cantoria MT Std',
    fontSize: 20,
    color: '#DAA560',
    alignSelf: 'center',
  },
  viewtags: {
    backgroundColor: '#000',
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textags: {
    fontFamily: 'Cantoria MT Std',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    letterSpacing: 0.1,
  },
  textags1: {
    fontFamily: 'Cantoria MT Std',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    letterSpacing: 0.1,
    width: width * 0.7,
  },
  rowtags: {
    flexDirection: 'row',
    width: width * 0.88,
    alignSelf: 'center',
    marginTop: 15,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 30,
  },
});

export default styles;
