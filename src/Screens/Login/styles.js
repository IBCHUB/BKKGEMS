import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  logobkk: {
    width: width * 0.6,
    height: 72,
    alignSelf: 'center',
    marginBottom: 20,
  },
  view: {
    width: width,
    backgroundColor: '#EEECE2',
    height: height,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonsign: {
    width: width * 0.5,
    justifyContent: 'center',
  },
  textsige: {
    alignSelf: 'center',
  },
  containerinput: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: width * 0.8,
    height: 50,
    color: '#393939',
    paddingLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Cantoria MT Std',
  },
  icon: {
    marginLeft: -40,
    alignSelf: 'center',
    marginTop: 30,
  },
  containersignup: {
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#EEECE2',
  },
  viewrow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Cantoria MT Std',
  },
  buttonsignup: {
    backgroundColor: '#DAA560',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
  },
  textsigeup: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  up: {
    borderBottomColor: '#DAA560',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  textup: {
    fontSize: 18,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
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
  texttopicmodal: {
    fontSize: 22,
    color: '#646363',
    alignSelf: 'center',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textdetailmodal: {
    fontSize: 18,
    color: '#646363',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textemaillmodal: {
    fontSize: 18,
    color: '#DAA560',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 5,
    fontFamily: 'Cantoria MT Std',
  },
  liner: {
    borderBottomWidth: 2,
    borderBottomColor: '#DAA560',
    width: width * 0.75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  lineror: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    width: width * 0.3,
  },
  viewor: {
    justifyContent: 'space-between',
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: 70,
    flexDirection: 'row',
  },
  textor: {
    color: '#646363',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: -10,
    fontFamily: 'Cantoria MT Std',
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
  inputEmail: {
    color: '#555555',
    // fontSize: metrics.NORMALIZEE(22),
  },
  borderRed: {
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  ContainerEmail: {
    borderColor: '#000000',
    borderBottomWidth: 0.8,
    height: 23,
    marginTop: 12,
    padding: 0,
  },
  btnNext: {
    height: 38,
    width: '60%',
    backgroundColor: '#faaf40',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
