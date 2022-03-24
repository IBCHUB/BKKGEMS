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
  row: {
    flexDirection: 'row',
  },
  iconpust: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginRight: 5,
    marginTop: -3,
  },
  textlist: {
    fontSize: 18,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    width: width * 0.6,
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
  viewlist: {
    width: 25,
    height: 25,
    borderWidth: 2.5,
    borderColor: '#888888',
    marginRight: 20,
    alignSelf: 'center',
  },
  row2: {
    flexDirection: 'row',
    borderBottomColor: '#88888860',
    borderBottomWidth: 0.5,
    height: 90,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  liner: {
    borderBottomColor: '#88888860',
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
  list: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginRight: 10,
  },
  img: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    marginRight: 10,
    borderRadius: 4,
    borderColor: '#EEECE2',
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
    alignSelf: 'center',
    width: width * 0.48,
  },
});

export default styles;
