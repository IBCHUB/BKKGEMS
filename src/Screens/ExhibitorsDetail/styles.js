import {Dimensions, StyleSheet} from 'react-native';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
  },
  viewHeader: {
    backgroundColor: '#EEECE2',
    width: width,
    paddingHorizontal: ViewScale(20),
    paddingBottom: ViewScale(20),
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: ViewScale(80),
    height: ViewScale(80),
    alignSelf: 'center',
    marginTop: ViewScale(-20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
    borderRadius: ViewScale(45),
    borderWidth: ViewScale(0.5),
    borderColor: '#fff',
  },
  textTopic: {
    fontSize: ViewScale(18),
    color: '#DAA560',
    alignSelf: 'center',
    marginTop: ViewScale(10),
    width: width * 0.75,
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  texthead: {
    fontSize: ViewScale(18),
    color: '#000',
    alignSelf: 'center',
    marginTop: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
  },
  textloca: {
    fontSize: ViewScale(10),
    color: '#000',
    alignSelf: 'center',
    marginLeft: ViewScale(5),
    fontFamily: 'Cantoria MT Std',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: ViewScale(5),

    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: '#DAA560',
    height: ViewScale(35),
    width: width * 0.35,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textbutton: {
    fontSize: ViewScale(14),
    color: '#DAA560',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  page: {
    marginHorizontal: ViewScale(10),
    marginTop: ViewScale(15),
  },
  textpage: {
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  containerproduct: {
    width: width,
  },
  viewproduct: {
    width: width * 0.8,
    height: ViewScale(330),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: '#fff',
    marginTop: ViewScale(20),
    alignSelf: 'center',
    marginBottom: ViewScale(15),
  },
  viewlist: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: ViewScale(10),
    marginRight: ViewScale(10),
  },
  buttonlist: {
    borderWidth: 1,
    borderRadius: ViewScale(12.5),
    justifyContent: 'center',
    width: ViewScale(25),
    height: ViewScale(25),
  },
  imgtopic: {
    width: width * 0.6,
    height: ViewScale(180),
    alignSelf: 'center',
    marginTop: ViewScale(10),
  },
  texttoproduct: {
    fontSize: ViewScale(20),
    color: '#000000',
    marginTop: ViewScale(20),
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Cantoria MT Std',
    width: width * 0.85,
    alignSelf: 'center',
  },
  textdetailproduct: {
    fontSize: ViewScale(16),
    color: '#ABABAB',
    textAlign: 'center',
    paddingHorizontal: ViewScale(40),
    alignSelf: 'center',
    marginTop: ViewScale(10),
    fontFamily: 'Cantoria MT Std',
  },
  minibutton: {
    height: ViewScale(30),
    backgroundColor: '#DEDDD4',
    borderRadius: ViewScale(4),
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: ViewScale(3),
    paddingHorizontal: ViewScale(5),
    marginVertical: ViewScale(10),
  },
  minitext: {
    fontSize: ViewScale(10),
    color: '#000',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.42,
    height: ViewScale(180),
    alignSelf: 'center',
    marginTop: ViewScale(20),
    borderRadius: ViewScale(5),
    marginLeft: ViewScale(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 11,
  },
  imgflat: {
    width: width * 0.42,
    height: ViewScale(150),
    borderTopLeftRadius: ViewScale(5),
    borderTopRightRadius: ViewScale(5),
    alignSelf: 'center',
  },
  textflat: {
    fontSize: ViewScale(10),
    color: '#000',
    marginLeft: ViewScale(10),
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
    paddingHorizontal: ViewScale(10),
    marginTop: ViewScale(5),
    textAlign: 'center',
  },
  containerabout: {
    width: width,
    paddingHorizontal: ViewScale(20),
    marginBottom: ViewScale(20),
  },
  textdetailabout: {
    fontSize: ViewScale(16),
    color: '#000',
    marginBottom: ViewScale(20),
    fontFamily: 'Cantoria MT Std',
    marginTop: ViewScale(10),
  },
  textsupabout: {
    fontSize: ViewScale(16),
    color: '#DAA560',
    fontWeight: '800',
    width: width * 0.45,
    fontFamily: 'Cantoria MT Std',
  },
  listsocial: {
    borderWidth: 1,
    borderRadius: ViewScale(20),
    justifyContent: 'center',
    width: ViewScale(40),
    height: ViewScale(40),
    borderColor: '',
    marginRight: ViewScale(10),
  },
  rowsocial: {
    flexDirection: 'row',
    marginTop: ViewScale(15),
  },
  buttondowload: {
    width: width * 0.9,
    height: ViewScale(60),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    backgroundColor: '#FAFAFA',
    alignSelf: 'center',
    marginTop: ViewScale(20),
    paddingHorizontal: ViewScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ViewScale(50),
  },
  textconten: {
    fontSize: ViewScale(13),
    color: '#000',
    fontFamily: 'Cantoria MT Std',

    width: width * 0.47,
  },
  liner: {
    width: width * 1,
    borderBottomColor: '#DAA560',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginVertical: ViewScale(20),
  },
  vedio: {
    width: ViewScale(18),
    height: ViewScale(11),
    alignSelf: 'center',
    marginRight: ViewScale(10),
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
    borderRadius: ViewScale(12),
    paddingHorizontal: ViewScale(15),
    paddingTop: ViewScale(25),
    paddingBottom: ViewScale(35),
  },
  iconmodal: {
    alignSelf: 'flex-end',
  },
  textopmodal: {
    fontSize: ViewScale(22),
    color: '#646363',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
    marginBottom: ViewScale(20),
  },
  viewinput: {
    width: width * 0.85,
    height: ViewScale(50),
    borderRadius: ViewScale(4),
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: ViewScale(20),
    alignSelf: 'center',
  },
  viewinput1: {
    width: width * 0.85,
    height: ViewScale(120),
    borderRadius: ViewScale(4),
    backgroundColor: '#fff',

    marginBottom: ViewScale(20),
    alignSelf: 'center',
    paddingTop: ViewScale(10),
  },
  input: {
    width: width * 0.78,
    alignSelf: 'center',
    fontSize: ViewScale(18),
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
  },
  touchedit: {
    width: width * 0.85,
    height: ViewScale(50),
    borderWidth: 1,
    borderRadius: ViewScale(4),
    borderColor: '#DAA560',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textedit: {
    fontSize: ViewScale(24),
    color: '#DAA560',
    fontFamily: 'Cantoria MT Std',
    alignSelf: 'center',
    marginTop: ViewScale(5),
  },
  picker: {
    placeholder: {
      color: '#AFAFAF',
      padding: 0,
      marginTop: ViewScale(5),
      fontSize: ViewScale(18),
      paddingLeft: ViewScale(15),
    },
    inputIOS: {
      color: '#646363',

      paddingRight: ViewScale(30),
      fontSize: ViewScale(18),
    },
    inputAndroid: {
      color: '#646363',
      padding: 0,
      margin: 0,
      fontSize: ViewScale(18),
      paddingRight: ViewScale(30),
    },
    iconContainer: {
      right: 0,
    },
  },
  containersort: {
    flex: 1,
    padding: ViewScale(20),
  },
  viewsort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
  },
  textsort: {
    fontSize: ViewScale(20),
    alignSelf: 'center',
    marginVertical: ViewScale(15),
    fontFamily: 'Cantoria MT Std',
  },
  textsorthead: {
    fontSize: ViewScale(16),
    fontFamily: 'Cantoria MT Std',
    color: '#444444',
    marginBottom: ViewScale(25),
  },
  bottomsort: {
    width: ViewScale(20),
    height: ViewScale(20),
    borderRadius: ViewScale(10),
    borderWidth: 1,
    borderColor: '#444',
    marginRight: ViewScale(15),
  },
  textlist1: {
    fontSize: ViewScale(24),
    fontFamily: 'Cantoria MT Std',
    color: '#646363',
  },
  row3: {
    flexDirection: 'row',
    borderBottomColor: '#88888860',
    paddingRight: ViewScale(20),
    justifyContent: 'space-between',
    width: width * 0.9,
    marginBottom: ViewScale(5),
  },
  linersort: {
    width: width * 0.85,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: ViewScale(15),
  },
  add: {
    height: ViewScale(80),
    paddingBottom: ViewScale(20),
    paddingHorizontal: ViewScale(20),
  },
  row5: {
    flexDirection: 'row',
  },
  iconpust: {
    width: ViewScale(18),
    height: ViewScale(18),
    alignSelf: 'center',
    marginRight: ViewScale(5),
    marginTop: ViewScale(-3),
  },

  viewmodal: {
    width: width * 0.96,
    backgroundColor: '#EEECE2',
    alignSelf: 'center',
    borderRadius: ViewScale(12),
    paddingHorizontal: ViewScale(15),
    paddingTop: ViewScale(25),
    paddingBottom: ViewScale(35),
  },
  iconmodal: {
    alignSelf: 'flex-end',
  },
  texttopicmodal: {
    fontSize: ViewScale(22),
    color: '#646363',
    alignSelf: 'center',
    marginBottom: ViewScale(10),
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textdetailmodal: {
    fontSize: ViewScale(18),
    color: '#646363',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Cantoria MT Std',
  },
  textemaillmodal: {
    fontSize: ViewScale(18),
    color: '#DAA560',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: ViewScale(5),
    fontFamily: 'Cantoria MT Std',
  },
  buttonexhi: {
    backgroundColor: '#EEECE2',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: ViewScale(20),
    height: ViewScale(48),
    borderRadius: ViewScale(2),
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DAA560',
    flexDirection: 'row',
    paddingHorizontal: ViewScale(25),
  },
  textexhi: {
    fontSize: ViewScale(20),
    color: '#DAA560',
    alignSelf: 'center',
    fontFamily: 'Cantoria MT Std',
  },
});

export default styles;
