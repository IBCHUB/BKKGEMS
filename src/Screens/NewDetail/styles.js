import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  imgHeader: {
    width: width,
    height: 250,
    marginBottom: 10,
  },
  icon: {
    marginTop: 10,
    marginLeft: 20,
  },
  textheader: {
    fontSize: 24,
    color: '#646363',
    marginVertical: 20,
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    width: width * 0.8,
  },
  textdetail: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: 16,
    width: width * 0.8,
    fontFamily: 'Cantoria MT Std',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    alignSelf: 'center',
    height: 50,
    borderBottomColor: '#DAA560',
    borderBottomWidth: 1.5,
  },
  textmini: {
    color: '#646363',
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  botton: {
    width: 80,
    height: 24,
    borderRadius: 15,
    backgroundColor: '#6F6F6F',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textshare: {
    fontFamily: 'Cantoria MT Std',
    fontSize: 11,
    color: '#fff',
    alignSelf: 'center',
  },
  iconshare: {
    alignSelf: 'center',
    marginRight: 5,
  },
  rowtags: {
    flexDirection: 'row',
    paddingBottom: 30,
    width: width * 0.8,
    alignSelf: 'center',
  },
  viewtag: {
    height: 22,
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: '#DEDDD4',
    borderRadius: 4,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  textags: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'Cantoria MT Std',
  },
  tags: {
    color: '#646363',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Cantoria MT Std',
    marginVertical: 20,
  },
  auto: {
    width: Dimensions.get('window').width - 15,
    marginTop: 35,
  },
});

export default styles;
