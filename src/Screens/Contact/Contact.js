import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {contactUs} from '../../action/auth.action';
import AutoHeightWebView from 'react-native-autoheight-webview';
const Contact = ({navigation, dispatch}) => {
  const [modal, setmodal] = useState(false);
  const _contactUs = async values => {
    try {
      var request =
        'contact_name=' +
        values.name +
        '&contact_company_name=' +
        values.company +
        '&contact_email=' +
        values.email +
        '&contact_subject=' +
        values.subject +
        '&contact_message=' +
        values.message;

      const response = await dispatch(contactUs(request));
      console.log(response);
      if (response.res_code == '200') {
        setmodal(true);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
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
            <FontAwesome5
              name="check-double"
              size={26}
              color="#DAA560"
              style={styles.icon1}
            />
            <Text style={styles.texttopicmodal}>Sent Already</Text>

            <TouchableOpacity
              onPress={() => {
                setmodal(false);
                setTimeout(() => {
                  navigation.goBack('');
                }, 300);
              }}
              style={styles.buttonsec}>
              <Text style={styles.textsec}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'CONTACT US'} />
        <ScrollView style={{backgroundColor: '#000', marginBottom: 10}}>
          <Formik
            initialValues={{
              name: '',
              company: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={values => {
              // console.log(values);
              _contactUs(values);
            }}
            validationSchema={yup.object().shape({
              name: yup.string().required(),
              company: yup.string().required(),
              email: yup.string().email().required(),
              subject: yup.string().required(),
              message: yup.string().required(),
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
                <View style={styles.viewinput}>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                    value={values.name}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Company"
                    onChangeText={handleChange('company')}
                    onBlur={() => setFieldTouched('company')}
                    value={values.company}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Subject"
                    onChangeText={handleChange('subject')}
                    onBlur={() => setFieldTouched('subject')}
                    value={values.subject}
                  />
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor="#646363"
                    placeholder="Type message..."
                    multiline
                    onChangeText={handleChange('message')}
                    onBlur={() => setFieldTouched('message')}
                    value={values.message}
                  />
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.botton}>
                    <Text style={styles.textbotton}>SEND MESSAGE</Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            )}
          </Formik>
          {/* <View style={styles.viewinput}>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Company Name" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Subject" />
            <TextInput
              style={styles.input1}
              placeholder="Type message..."
              multiline
            />
            <TouchableOpacity style={styles.botton}>
              <Text style={styles.textbotton}>SEND MESSAGE</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.viewtags}>
            <Text style={styles.textags}>
              Office of Lifestyle Trade Promotion Department of International
              Trade Promotion Ministry of Commerce, Thailand
            </Text>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/gps.png')}
              />
              <Text style={styles.textags1}>
                563 Nonthaburi Road, Muang, Nonthaburi 11000 Thailand
              </Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/phone.png')}
              />
              <Text style={styles.textags1}>+66 2507 8392, 8393</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/Message.png')}
              />
              <Text style={styles.textags1}>official@bkkgems.com</Text>
            </View>
            <AutoHeightWebView
              style={{
                width: Dimensions.get('window').width - 15,
                marginTop: 40,
                height: 200,
              }}
              customScript={`document.body.style.background = 'lightyellow';`}
              customStyle={`
      * {
        font-family: 'Times New Roman';
      }
      p {
        font-size: 16px;
      }
    `}
              onSizeUpdated={size => console.log(size.height)}
              files={[
                {
                  href: 'cssfileaddress',
                  type: 'text/css',
                  rel: 'stylesheet',
                },
              ]}
              source={{
                html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1391824422294!2d100.53843411483462!3d13.770479000570441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eaff36c43ff%3A0xfa7be2811d3a6387!2sPhyathai%202%20Hospital!5e0!3m2!1sen!2sth!4v1572329537952!5m2!1sen!2sth" width="96%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`,
              }}
              scalesPageToFit={true}
              viewportContent={'width=device-width, user-scalable=no'}
              /*
    other react-native-webview props
    */
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
