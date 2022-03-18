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
import I18n from '../../utils/I18n';

const Profile = ({navigation, dispatch, authUser}) => {
  const dataUser = authUser.token;

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
          <Text style={styles.texttopic}>{I18n.t('email')}</Text>
          <TextInput
            defaultValue={dataUser.email}
            placeholder="drive.bkkgems2022@gmail.com"
            style={styles.textinput}
          />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>{I18n.t('FullName')}</Text>
          <TextInput
            defaultValue={dataUser.fullname}
            placeholder="Gemy Jewell"
            style={styles.textinput}
          />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>{I18n.t('Company')}</Text>
          <TextInput
            defaultValue={dataUser.company_name}
            placeholder="Bkkgems company limited"
            style={styles.textinput}
          />
        </View>
        <View style={styles.viewinput}>
          <Text style={styles.texttopic}>{I18n.t('Country')}</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            value={dataUser.country_name}
            items={country}
            style={styles.picker}
            Icon={() => {
              return (
                <FontAwesome5 name="chevron-down" size={20} color="#646363" />
              );
            }}
          />
        </View>
        <View style={styles.viewinput1}>
          <Text style={styles.texttopic}>{I18n.t('Address')}</Text>
          <TextInput
            defaultValue={dataUser.address}
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
const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
