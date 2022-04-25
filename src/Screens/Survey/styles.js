import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  view: {
    backgroundColor: '#343434',
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: height,
  },
  viewin: {
    width: width * 0.7,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 50,
    justifyContent: 'space-between',
  },
  img: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.18,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  texttop: {
    fontSize: 18,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
  },
  textcenter: {
    fontSize: 18,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: 10,
  },
  input: {
    width: width * 0.9,
    height: 120,
    backgroundColor: '#fff',
    marginVertical: 30,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 18,
    fontFamily: 'Cantoria MT Std',
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
});

export default styles;
