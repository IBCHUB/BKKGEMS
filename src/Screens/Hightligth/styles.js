import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  viewhead: {
    width: width,

    borderBottomWidth: 0.5,

    borderBottomColor: '#EEECE2',
  },

  headtab: {
    width: width * 0.6,
    height: 43,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonflat: {
    backgroundColor: '#fff',
    width: width * 0.5,
    height: 180,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#EEECE2',
  },
  imgflat: {
    width: width * 0.5,
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    width: width * 0.5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    height: 30,
  },
  imglogo: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 10,
    color: '#FFECAC',
    marginLeft: 10,
    alignSelf: 'center',
    width: width * 0.35,
    fontFamily: 'Cantoria MT Std',
  },
});

export default styles;
