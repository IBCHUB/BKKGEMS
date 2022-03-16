import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import styles from './styles';
import ImgToBase64 from 'react-native-image-base64';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import {Country} from '../../action/data.action';

const Profile = ({navigation, dispatch}) => {
  const [imgbase64, setimgbase64] = useState([]);
  const [country, setCountry] = useState();

  const _Country = async values => {
    try {
      const response = await dispatch(Country());
      // console.log(response.res_result);
      if (response.res_code == '00') {
        setCountry(
          response.res_result.map(val => ({
            label: val.country_name,
            value: val.country_name,
          })),
        );
        // console.log('1111');
      } else {
        setmodalfalse(true);
        // console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Country();
  }, []);

  const GenimageToBase64 = (url, type) => {
    ImgToBase64.getBase64String(url)
      .then(base64String => console.log(base64String))
      .catch(err => doSomethingWith(err));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.rowhead}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.goBack('');
            }}>
            <FontAwesome5
              name="arrow-left"
              size={20}
              color={'#DAA560'}
              style={styles.icon}
            />
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.texthead}>MY PROFILE</Text>
          </View>
          <View style={styles.row} />
        </View>
        <TouchableOpacity
          // onPress={GenimageToBase64}

          style={styles.viewpicimg}>
          <Image
            source={require('../../../assets/image/profile.png')}
            style={styles.imgprofile}
          />
          <View style={styles.icon1}>
            <FontAwesome5
              name="camera"
              size={15}
              color={'#44444450'}
              style={{alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>Email</Text>
          <TextInput
            placeholder="drive.bkkgems2022@gmail.com"
            style={styles.textinput}
          />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>Full Name</Text>
          <TextInput placeholder="Gemy Jewell" style={styles.textinput} />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>Company</Text>
          <TextInput
            placeholder="Bkkgems company limited"
            style={styles.textinput}
          />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>Country</Text>
          {/* <TextInput placeholder="Thailand" style={styles.textinput} /> */}
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={country}
            // style={{
            //   placeholder: {
            //     color: '#1d77b9',
            //     padding: 0,
            //   },
            //   inputIOS: {
            //     color: '#1d77b9',
            //     marginTop: -3,
            //     paddingRight: 30,
            //   },
            //   inputAndroid: {
            //     color: '#1d77b9',

            //     paddingRight: 30,
            //     padding: 0,
            //     margin: 0,
            //   },
            //   iconContainer: {
            //     right: 12,
            //   },
            // }}
          />
        </View>
        <View style={styles.viewinput1}>
          <Text style={styles.texttopic}>Address</Text>
          <TextInput
            multiline
            placeholder="Bangkok, Thailand."
            style={styles.textinput}
          />
        </View>
        <TouchableOpacity style={styles.touchedit}>
          <Text style={styles.textedit}>SAVE PROFILE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

// export default Profile;
// const mapStateToProps = state => ({
//   LoadingCounters: state.dataReducer.LoadingCounters,
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Profile);
