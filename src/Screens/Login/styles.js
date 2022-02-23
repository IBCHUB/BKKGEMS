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
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
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
});

export default styles;
