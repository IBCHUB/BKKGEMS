import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  rowhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFECAC',
  },
  icon: {
    alignSelf: 'center',
  },
  icon1: {
    alignSelf: 'flex-end',
    width: 26,
    height: 26,
    backgroundColor: '#fff',
    borderRadius: 13,
    justifyContent: 'center',
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBkk: {
    height: 40,
    width: 130,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texthead: {
    fontSize: 18,
    color: '#DAA560',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: 5,
  },
  viewpicimg: {
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 40,
  },
  imgprofile: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  viewinput: {
    width: width * 0.9,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#44444250',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 15,
    padding: 5,
  },
  texttopic: {
    fontSize: 12,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
  },
  textinput: {
    width: width * 0.85,
    fontSize: 18,
    color: '#646363',
    fontFamily: 'Cantoria MT Std',
    marginTop: 5,
  },
  viewinput1: {
    width: width * 0.9,
    height: 120,
    borderWidth: 0.5,
    borderColor: '#44444250',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 15,
    padding: 5,
  },
  touchedit: {
    width: width * 0.9,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#DAA560',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textedit: {
    fontSize: 24,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
