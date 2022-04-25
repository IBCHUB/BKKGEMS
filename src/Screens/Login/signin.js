import React, {useState, Fragment, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Linking,
  StatusBar,
  Alert,
} from 'react-native';
import Input from './input';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  loginUser,
  forgotPassword,
  Exhibitorslogin,
  loginSkip,
} from 'actions/auth.action';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {getDeepLink} from '../../config/utilities';
import {fetchApi} from '../../service/api';

const signin = ({navigation, onPress, dispatch, authData}) => {
  const [modal, setmodal] = useState(false);
  const [modalfalse, setmodalfalse] = useState(false);
  const [modalemail, setmodalemail] = useState(false);
  const [body, setbody] = useState({
    securePassword: true,
  });
  const updateSecurePassword = () => {
    setbody({
      ...body,
      securePassword: !body.securePassword,
    });
  };

  // const Codeurl = async values => {
  //   // console.log('::' + values);
  //   let regex = /[?&]([^=#]+)=([^&#]*)/g,
  //     params = {},
  //     match;
  //   while ((match = regex.exec(values))) {
  //     params[match[1]] = match[2];
  //   }
  //   const {code} = params;
  //   return code;
  // };

  // const loginurl = async values => {
  //   const deepLink = getDeepLink('callback');
  //   // https://sso.ditp.go.th/sso/auth?response_type=token&client_id=ssonticlient&redirect_uri=https://bkkgem2022.ibusiness.co.th/EXHIBITOR_LOGIN.php
  //   const url = `https://sso.ditp.go.th/sso/index.php/auth?response_type=token&client_id=SS0047423&redirect_uri=${deepLink}&state=appditp`;
  //   // console.log(await InAppBrowser.isAvailable());
  //   try {
  //     // await InAppBrowser.close();
  //     if (await InAppBrowser.isAvailable()) {
  //       const result = await InAppBrowser.openAuth(url, deepLink, {
  //         // iOS Properties
  //         ephemeralWebSession: false,
  //         // Android Properties
  //         showTitle: false,
  //         enableUrlBarHiding: true,
  //         enableDefaultShare: false,
  //       }).then(response => {
  //         if (response.type === 'success' && response.url) {
  //           // console.log(getCode(response.url));
  //           dispatch(Exhibitorslogin(getCode(response.url)));
  //         }
  //       });
  //       // Alert.alert('Response', JSON.stringify(result));
  //     } else {
  //       Alert.alert('InAppBrowser is not supported :/');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Linking.openURL(url);
  //   }
  // };
  // function getCode(url) {
  //   let regex = /[?&]([^=#]+)=([^&#]*)/g,
  //     params = {},
  //     match;
  //   while ((match = regex.exec(url))) {
  //     params[match[1]] = match[2];
  //   }
  //   const {code} = params;
  //   return code;
  // }
  const _loginSkip = async values => {
    try {
      const response = await dispatch(loginSkip({}));
      console.log('>>>>', response);
    } catch (error) {}
  };
  // useEffect(() => {
  //   _loginSkip();
  // }, []);

  const _loginUser = async values => {
    try {
      var request = 'username=' + values.email + '&password=' + values.password;
      const response = await dispatch(loginUser(request));
      // console.log(response);
      if (response.res_code == '00') {
        /*navigation.navigate('Home');*/
        console.log('1111');
      } else {
        setmodalfalse(true);
        console.log('2222');
      }
    } catch (error) {}
  };
  const _forgotPassword = async values => {
    try {
      var request = 'email=' + values.email;

      const response = await dispatch(forgotPassword(request));
      console.log(response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        setmodalfalse(true);
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
            <Text style={styles.texttopicmodal}>Forgot your password?</Text>
            <Text style={[styles.textdetailmodal, {fontSize: 16}]}>
              We’ll send the account details to your email.
            </Text>
            <Formik
              initialValues={{
                email: '',
              }}
              onSubmit={values => {
                _forgotPassword(values);
              }}
              validationSchema={yup.object().shape({
                email: yup.string().email().required(),
              })}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
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
                    placeholderTextColor="#646363"
                  />
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.buttonexhi}>
                    <Text style={styles.textexhi}>SEND</Text>
                  </TouchableOpacity>
                </Fragment>
              )}
            </Formik>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalfalse}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalfalse(!modalfalse);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalfalse(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Ionicons
              name="close"
              size={60}
              color="#D76060"
              style={{alignSelf: 'center'}}
            />
            <Text style={styles.texttopicmodal}>
              Sorry, wrong username or password.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setmodalfalse(false);
              }}
              style={styles.buttonexhi}>
              <Text style={styles.textexhi}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalemail}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalemail(!modalemail);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalemail(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Ionicons
              name="mail-open-outline"
              size={32}
              color="#DAA560"
              style={{alignSelf: 'center'}}
            />
            <Text style={styles.texttopicmodal}>
              Send e-mail already {'\n'} Please check your E-mail
            </Text>
          </View>
        </View>
      </Modal>
      <View style={{marginTop: 50}} />
      <Formik
        initialValues={{
          // email: '',
          // password: '',
          email: 'Santisook.tee@gmail.com',
          password: '11111111',
        }}
        onSubmit={values => {
          // console.log(values);
          _loginUser(values);
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <Input
              placeholder="Email"
              placeholderTextColor="#646363"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
            />

            {/* {errors.email && touched.email && (
              <Text
                style={{
                  fontSize: 18,
                  color: 'red',
                  marginTop: 5,
                }}>
                {'รูปแบบผิดพลาด'}
              </Text>
            )} */}
            <View style={styles.viewrow}>
              <Input
                placeholder="Password"
                placeholderTextColor="#646363"
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
            <View style={{marginTop: 30}} />
            <View style={[styles.row, {marginTop: 25}]}>
              <Text style={styles.text}>Don’t have an account yet? </Text>
              <TouchableOpacity onPress={onPress} style={styles.up}>
                <Text style={styles.textup}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setmodal(true);
              }}
              style={[styles.up, {marginTop: 10}]}>
              <Text style={styles.textup}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={{marginTop: 30}} />
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonsignup}>
              <Text style={styles.textsigeup}>LOG - IN</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => _loginSkip()}
        style={styles.buttonsignup1}>
        <Text style={styles.textsigeup1}>SKIP LOG - IN</Text>
      </TouchableOpacity>
      {/* <View style={styles.viewor}>
        <View style={styles.lineror} />
        <Text style={styles.textor}>or</Text>
        <View style={styles.lineror} />
      </View>
      <TouchableOpacity
        onPress={() => {
          loginurl();
        }}
        style={styles.buttonexhi}>
        <Ionicons
          name="log-in"
          size={25}
          color={'#DAA560'}
          style={{alignSelf: 'center', marginRight: 10}}
        />
        <Text style={styles.textexhi}>EXHIBITOR - LOGIN</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// export default signin;

const mapStateToProps = state => ({
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(signin);
