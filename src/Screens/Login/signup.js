import React, {useState, Fragment, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Input from './input';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {registerUser, resendEmail} from 'actions/auth.action';
import {connect} from 'react-redux';
import {Country} from '../../action/data.action';
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik';
import * as yup from 'yup';

const signup = ({navigation, onPress, dispatch}) => {
  const [modal, setmodal] = useState(false);
  const [city, setcity] = useState([]);
  // console.log(city);
  const placeholder = {
    label: 'Country',
    value: null,
    color: '#AFAFAF20',
  };
  const [body, setbody] = useState({
    securePassword: true,
    secureRepassword: true,
  });
  const updateSecurePassword = () => {
    setbody({
      ...body,
      securePassword: !body.securePassword,
    });
  };
  const updateSecureRepassword = () => {
    setbody({
      ...body,
      secureRepassword: !body.secureRepassword,
    });
  };

  const _Country = async values => {
    try {
      const response = await dispatch(Country());
      // console.log(response.res_result);
      if (response.res_code == '00') {
        setcity(
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

  const _registerUser = async values => {
    try {
      var request =
        'reg_email=' +
        values.email +
        '&reg_password=' +
        values.password +
        '&reg_password_re=' +
        values.repassword +
        '&reg_company=' +
        values.company +
        '&reg_name=' +
        values.fullname +
        '&reg_country=' +
        values.country;
      const response = await dispatch(registerUser(request));
      console.log(response);
      if (response.res_code == '00') {
        setmodal(true);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _resendemail = async values => {
    try {
      var request = 'reg_email=' + values.email;
      const response = await dispatch(resendEmail(request));
      console.log(response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  return (
    <View style={styles.containersignup}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodal(!modal);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Text style={styles.texttopicmodal}>Email Confirmation</Text>
            <Text style={styles.textdetailmodal}>
              We have sent an e-mail to drive.
            </Text>
            <Text style={styles.textemaillmodal}>{body.Email}</Text>
            <Text style={styles.textdetailmodal}>
              Please confirm the validity {'\n'} of our e-mail address by
              following instructions in the confirmation e-mail.
            </Text>
            <View style={styles.liner} />
            <View style={styles.viewrow}>
              <Text style={styles.textdetailmodal}>
                If you do not get any e-mail,
              </Text>
              <TouchableOpacity
                onPress={() => _resendemail()}
                style={styles.up}>
                <Text style={styles.textup}>click here</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textdetailmodal}>
              to resend confirmation e-mail.
            </Text>
          </View>
        </View>
      </Modal>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repassword: '',
          company: '',
          fullname: '',
          country: '',
        }}
        onSubmit={values => {
          console.log(values);
          _registerUser(values);
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
          repassword: yup.string().required(),
          company: yup.string().required(),
          fullname: yup.string().required(),
          country: yup.string().required(),
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
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text
                style={{
                  fontSize: 12,
                  color: 'red',
                  marginTop: 5,
                  marginBottom: -20,
                  marginLeft: 40,
                }}>
                {'*รูปแบบผิดพลาด'}
              </Text>
            )}
            <View style={styles.viewrow}>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={body.securePassword ? true : false}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                value={values.password}
              />
              <TouchableOpacity
                onPress={updateSecurePassword}
                style={{alignSelf: 'center'}}>
                {body.securePassword ? (
                  <FontAwesome5
                    name="eye-slash"
                    size={20}
                    color="#444444"
                    style={styles.icon}
                  />
                ) : (
                  <FontAwesome5
                    name="eye"
                    size={20}
                    color="#444444"
                    style={styles.icon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.viewrow}>
              <Input
                placeholder="Re Type Password"
                autoCapitalize="none"
                secureTextEntry={body.secureRepassword ? true : false}
                onChangeText={handleChange('repassword')}
                onBlur={() => setFieldTouched('repassword')}
                value={values.repassword}
              />
              <TouchableOpacity
                onPress={updateSecureRepassword}
                style={{alignSelf: 'center'}}>
                {body.secureRepassword ? (
                  <FontAwesome5
                    name="eye-slash"
                    size={20}
                    color="#444444"
                    style={styles.icon}
                  />
                ) : (
                  <FontAwesome5
                    name="eye"
                    size={20}
                    color="#444444"
                    style={styles.icon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Input
              placeholder="Full Name"
              autoCapitalize="none"
              onChangeText={handleChange('fullname')}
              onBlur={() => setFieldTouched('fullname')}
              value={values.fullname}
            />
            <Input
              placeholder="Company Name"
              autoCapitalize="none"
              onChangeText={handleChange('company')}
              onBlur={() => setFieldTouched('company')}
              value={values.company}
            />
            <View
              style={[styles.input, {marginTop: 30, justifyContent: 'center'}]}>
              <RNPickerSelect
                onValueChange={value => setFieldValue('country', value)}
                onBlur={() => setFieldTouched('fullname')}
                placeholder={placeholder}
                items={city}
                style={styles.picker}
                Icon={() => {
                  return (
                    <FontAwesome5
                      name="chevron-down"
                      size={20}
                      color="#646363"
                      style={{marginRight: 15, marginTop: 5}}
                    />
                  );
                }}
              />
            </View>

            <View style={[styles.row, {marginTop: 25}]}>
              <Text style={styles.text}>Already Have An Account? </Text>
              <TouchableOpacity onPress={onPress} style={styles.up}>
                <Text style={styles.textup}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonsignup}>
              <Text style={styles.textsigeup}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(signup);
