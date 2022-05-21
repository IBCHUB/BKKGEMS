import React, {useState, useEffect, Fragment} from 'react';
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
import {Formik} from 'formik';
import * as yup from 'yup';
import {Edit_profile, getUser} from '../../action/auth.action';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = ({navigation, dispatch, authUser}) => {
  const dataUser = authUser.token;
  console.log(dataUser.profile_img);
  const [testimg, settestimg] = useState();
  const [imgbase64, setimgbase64] = useState([]);
  const [country, setCountry] = useState([]);
  // console.log(country);
  const _Country = async values => {
    try {
      const response = await dispatch(Country());
      // console.log(response);
      if (response.res_code == '00') {
        setCountry(
          response.res_result.map(val => ({
            label: val.country_name,
            value: val.id + '',
          })),
        );
        // console.log('1111');
      } else {
        setmodalfalse(true);
        // console.log('2222');
      }
    } catch (error) {}
  };

  const _editprofile = async values => {
    try {
      let imgsend = '';
      if (testimg != undefined) {
        imgsend = '&img=' + imgbase64;
      }
      var request =
        'fullname=' +
        values.fullname +
        '&company_name=' +
        dataUser.company_name +
        '&country_id=' +
        values.country_id +
        '&address=' +
        values.address +
        imgsend;
      console.log(request);
      const response = await dispatch(Edit_profile(request));
      console.log(response);
      if (response.res_code == '00') {
        // setmodal(true);
        const response2 = await dispatch(getUser());
        console.log(response2);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _Country();
  }, []);

  const GenimageToBase64 = (url, type) => {
    const options2 = {
      mediaType: 'photo',
      path: 'photo',
      quality: 1,
      maxWidth: 600,
      maxHeight: 600,
    };
    launchImageLibrary(options2, response => {
      try {
        if (!response.didCancel) {
          // console.log(response.assets[0].uri);
          settestimg(response.assets[0].uri);
          GenimageToBase64Step2(
            response.assets[0].uri,
            response.assets[0].type,
          );
        }
      } catch (error) {}
    });
    // ImgToBase64.getBase64String(url)
    //   .then(base64String => console.log(base64String))
    //   .catch(err => doSomethingWith(err));
  };

  const GenimageToBase64Step2 = (url, type) => {
    ImgToBase64.getBase64String(url)
      .then(
        base64String => {
          let basetype = '';
          if (type == 'image/png') {
            basetype = 'data:image/png;base64,';
          } else {
            basetype = 'data:image/jpeg;base64,';
          }
          // _editImage(basetype + base64String);
          // console.log(basetype + base64String);
          setimgbase64(basetype + base64String);
        },
        // setimgbase64('data:image/jpeg;base64,' + base64String),
      )
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
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
      <TouchableOpacity onPress={GenimageToBase64} style={styles.viewpicimg}>
        {testimg != undefined ? (
          <Image source={{uri: testimg}} style={styles.imgprofile} />
        ) : dataUser.profile_img != undefined ? (
          <Image
            source={{uri: dataUser.profile_img}}
            style={styles.imgprofile}
          />
        ) : (
          <Image
            source={require('../../../assets/image/profile.png')}
            style={styles.imgprofile}
          />
        )}

        <View style={styles.icon1}>
          <FontAwesome5
            name="camera"
            size={15}
            color={'#44444450'}
            style={{alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>
      {/* {console.log('xx' + dataUser.country_id)} */}
      <Formik
        initialValues={{
          fullname: dataUser.fullname,
          country_id: dataUser.country_id + '',
          address: dataUser.address,
        }}
        onSubmit={values => {
          console.log(values);
          _editprofile(values);
        }}
        validationSchema={yup.object().shape({
          country_id: yup.string().required(),
          fullname: yup.string().required(),
          address: yup.string().required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          setFieldValue,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <View style={styles.viewinput}>
              <Text style={styles.texttopic}>{I18n.t('email')}</Text>
              <Text style={styles.textinput}>{dataUser.email}</Text>
            </View>
            <View style={styles.viewinput}>
              <Text style={styles.texttopic}>{I18n.t('FullName')}</Text>
              <TextInput
                defaultValue={values.fullname}
                style={styles.textinput}
                autoCapitalize="none"
                onChangeText={handleChange('fullname')}
                onBlur={() => setFieldTouched('fullname')}
              />
            </View>
            <View style={styles.viewinput}>
              <Text style={styles.texttopic}>{I18n.t('Company')}</Text>
              <Text style={styles.textinput}>{dataUser.company_name}</Text>
            </View>
            <View style={styles.viewinput}>
              <Text style={styles.texttopic}>{I18n.t('Country')}</Text>
              {/* {console.log('ccc' + values.country_id)} */}
              {country.length > 0 && (
                <RNPickerSelect
                  onValueChange={value => setFieldValue('country_id', value)}
                  onBlur={() => setFieldTouched('country_id')}
                  placeholder={''}
                  value={values.country_id}
                  items={country}
                  style={styles.picker}
                  Icon={() => {
                    return (
                      <FontAwesome5
                        name="chevron-down"
                        size={20}
                        color="#646363"
                      />
                    );
                  }}
                />
              )}
            </View>
            <View style={styles.viewinput1}>
              <Text style={styles.texttopic}>{I18n.t('Address')}</Text>
              <TextInput
                defaultValue={dataUser.address}
                multiline
                style={styles.textinput}
                onChangeText={handleChange('address')}
                onBlur={() => setFieldTouched('address')}
              />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.touchedit}>
              <Text style={styles.textedit}>SAVE PROFILE</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </Formik>
      {/* <View style={styles.viewinput}>
        <Text style={styles.texttopic}>{I18n.t('email')}</Text>
        <TextInput defaultValue={dataUser.email} style={styles.textinput} />
      </View> */}
      {/* <View style={styles.viewinput}>
        <Text style={styles.texttopic}>{I18n.t('FullName')}</Text>
        <TextInput defaultValue={dataUser.fullname} style={styles.textinput} />
      </View> */}
      {/* <View style={styles.viewinput}>
        <Text style={styles.texttopic}>{I18n.t('Company')}</Text>
        <TextInput
          defaultValue={dataUser.company_name}
          style={styles.textinput}
        />
      </View> */}
      {/* <View style={styles.viewinput}>
        <Text style={styles.texttopic}>{I18n.t('Country')}</Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          placeholder={''}
          value={dataUser.country_name}
          items={country}
          style={styles.picker}
          Icon={() => {
            return (
              <FontAwesome5 name="chevron-down" size={20} color="#646363" />
            );
          }}
        />
      </View> */}
      {/* <View style={styles.viewinput1}>
        <Text style={styles.texttopic}>{I18n.t('Address')}</Text>
        <TextInput
          defaultValue={dataUser.address}
          multiline
          style={styles.textinput}
        />
      </View> */}
      {/* <TouchableOpacity style={styles.touchedit}>
        <Text style={styles.textedit}>SAVE PROFILE</Text>
      </TouchableOpacity> */}
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
