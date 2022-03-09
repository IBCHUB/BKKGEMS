import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewrow: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  texthead: {
    fontSize: 15,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
  },
  textdelete: {
    fontSize: 15,
    fontFamily: 'Cantoria MT Std',
    color: '#D76060',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  row1: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  row2: {
    flexDirection: 'row',
    borderBottomColor: '#88888860',
    borderBottomWidth: 0.5,
    height: 70,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  row3: {
    flexDirection: 'row',
    borderBottomColor: '#88888860',
    paddingRight: 20,
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  iconpust: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginRight: 5,
    marginTop: -3,
  },
  textlist: {
    fontSize: 20,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
  },
  viewlist: {
    width: 25,
    height: 25,
    borderWidth: 2.5,
    borderColor: '#888888',
    marginRight: 20,
    alignSelf: 'center',
  },
  liner: {
    borderBottomColor: '#88888860',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  list: {
    width: width * 0.52,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  textopmodal: {
    fontSize: 22,
    color: '#646363',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    marginBottom: 20,
  },
  viewinput: {
    width: width * 0.85,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  viewinput1: {
    width: width * 0.85,
    height: 120,
    borderRadius: 4,
    backgroundColor: '#fff',

    marginBottom: 20,
    alignSelf: 'center',
    paddingTop: 10,
  },
  input: {
    width: width * 0.78,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
  },
  touchedit: {
    width: width * 0.85,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#DAA560',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textedit: {
    fontSize: 22,
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
