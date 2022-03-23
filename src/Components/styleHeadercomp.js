import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFECAC',
  },
  logoBkk: {
    height: 40,
    width: 130,
    alignSelf: 'center',
    marginLeft: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  iconprofile: {
    height: 22,
    width: 22,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  texthead: {
    fontSize: 18,
    color: '#DAA560',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    marginLeft: 30,
    alignSelf: 'center',
    marginTop: 5,
    width: width * 0.5,
  },
  texthead1: {
    fontSize: 22,
    color: '#DAA560',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
