import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFECAC',
  },
  logoBkk: {
    height: 40,
    width: 130,
    alignSelf: 'center',
    marginLeft: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSend: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  iconprofile: {
    height: 22,
    width: 22,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default styles;
