import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewHeader: {
    backgroundColor: '#EEECE2',
    width: width,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  textTopic: {
    fontSize: 18,
    color: '#DAA560',
    alignSelf: 'center',
    marginTop: 10,
    width: width * 0.75,
    textAlign: 'center',
  },
  texthead: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'center',
    marginTop: 10,
  },
  textloca: {
    fontSize: 10,
    color: '#000',
    alignSelf: 'center',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#DAA560',
    height: 35,
    width: width * 0.2,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textbutton: {
    fontSize: 12,
    color: '#DAA560',
    alignSelf: 'center',
  },
  page: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  textpage: {
    fontSize: 16,
    alignSelf: 'center',
  },
  containerproduct: {
    width: width,
    height: height,
  },
  viewproduct: {
    width: width * 0.8,
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
  },
  viewlist: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  buttonlist: {
    borderWidth: 1,
    borderRadius: 12.5,
    justifyContent: 'center',
    width: 25,
    height: 25,
  },
  imgtopic: {
    width: width * 0.6,
    height: 180,
    alignSelf: 'center',
    marginTop: 10,
  },
  texttoproduct: {
    fontSize: 20,
    color: '#000000',
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: '600',
  },
  textdetailproduct: {
    fontSize: 16,
    color: '#ABABAB',
    textAlign: 'center',
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginTop: 10,
  },
  minibutton: {
    height: 30,
    backgroundColor: '#DEDDD4',
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 3,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  minitext: {
    fontSize: 10,
    color: '#000',
    alignSelf: 'center',
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.42,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 20,
  },
  imgflat: {
    width: width * 0.42,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textflat: {
    fontSize: 10,
    color: '#000',
    marginLeft: 10,
    alignSelf: 'center',

    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default styles;
