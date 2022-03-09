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
  viewrow1: {
    flexDirection: 'row',
    width: width * 0.5,
    justifyContent: 'space-between',
    alignSelf: 'center',
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
  viewlist: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#888888',
    marginRight: 20,
    alignSelf: 'center',
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
  viewflat: {
    width: width * 0.5,
    justifyContent: 'center',
    marginBottom: 10,
    height: 200,
  },
  rowflat: {
    flexDirection: 'row',
    width: width * 0.45,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  img: {
    width: width * 0.45,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  textflat: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Cantoria MT Std',
    marginTop: 10,
  },
  texttt: {
    height: 60,
    width: width * 0.35,
    alignSelf: 'center',
  },
  buttonlist: {
    borderWidth: 1,
    borderRadius: 12.5,
    justifyContent: 'center',
    width: 25,
    height: 25,
  },
});

export default styles;
